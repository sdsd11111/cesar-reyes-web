'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calculator, DollarSign, Package, TrendingUp, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function CalculadoraInversion() {
  const [producto, setProducto] = useState('');
  const [pvp, setPvp] = useState('');
  const [utilidad, setUtilidad] = useState('');

  // Calcular resultados
  const resultados = useMemo(() => {
    const pvpNum = parseFloat(pvp) || 0;
    const utilidadNum = parseFloat(utilidad) || 0;
    const inversion = 150; // Inversión fija de $150

    if (utilidadNum <= 0 || isNaN(utilidadNum)) return null;

    const unidadesAnuales = Math.ceil(inversion / utilidadNum);
    const unidadesMensuales = Math.ceil(unidadesAnuales / 12);

    return {
      unidadesAnuales,
      unidadesMensuales,
      porcentajeUtilidad: pvpNum > 0 ? (utilidadNum / pvpNum) * 100 : 0
    };
  }, [pvp, utilidad]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // El cálculo se hace automáticamente con useMemo
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border border-gray-200 shadow-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-600 text-white">
        <div className="flex items-center gap-3">
          <Calculator className="h-8 w-8" />
          <div>
            <CardTitle>Calculadora de Inversión</CardTitle>
            <CardDescription className="text-orange-100">
              Descubre cuántas unidades necesitas vender para recuperar tu inversión
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Producto */}
            <div className="space-y-2">
              <Label htmlFor="producto" className="flex items-center gap-2 text-gray-700">
                <Package className="h-4 w-4" />
                Producto Estrella
              </Label>
              <Input
                id="producto"
                placeholder="Ej: Jarrón de cerámica tradicional"
                value={producto}
                onChange={(e) => setProducto(e.target.value)}
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>

            {/* PVP */}
            <div className="space-y-2">
              <Label htmlFor="pvp" className="flex items-center gap-2 text-gray-700">
                <DollarSign className="h-4 w-4" />
                Precio de Venta (PVP)
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                <Input
                  id="pvp"
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="0.00"
                  value={pvp}
                  onChange={(e) => setPvp(e.target.value)}
                  className="pl-8 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Utilidad por unidad */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="utilidad" className="flex items-center gap-2 text-gray-700">
                  <DollarSign className="h-4 w-4" />
                  Utilidad por unidad
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button type="button" className="text-gray-400 hover:text-gray-600">
                        <Info className="h-4 w-4" />
                        <span className="sr-only">¿Qué es la utilidad por unidad?</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="text-sm">
                        Es lo que ganas por cada producto después de restar todos los costos (materiales, producción, etc.) al precio de venta.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                <Input
                  id="utilidad"
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="0.00"
                  value={utilidad}
                  onChange={(e) => setUtilidad(e.target.value)}
                  className="pl-8 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
              </div>
              {pvp && utilidad && parseFloat(pvp) > 0 && (
                <p className="text-sm text-gray-500">
                  {resultados && resultados.porcentajeUtilidad > 0 && (
                    <>
                      Equivale al {resultados.porcentajeUtilidad.toFixed(0)}% del precio de venta
                    </>
                  )}
                </p>
              )}
            </div>
          </div>

          {resultados && (
            <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-amber-600" />
                Resultados
              </h3>
              
              <div className="space-y-2">
                <p className="text-gray-700">
                  Para recuperar la inversión de $150, este sitio deberá vender al menos:
                </p>
                <div className="bg-white p-4 rounded-lg border border-amber-100 shadow-sm">
                  <p className="text-2xl font-bold text-amber-700">
                    {resultados.unidadesAnuales} {resultados.unidadesAnuales === 1 ? 'unidad' : 'unidades'} en un año
                  </p>
                  <p className="text-gray-600 mt-1">
                    (Aproximadamente {resultados.unidadesMensuales} {resultados.unidadesMensuales === 1 ? 'unidad' : 'unidades'} por mes)
                  </p>
                </div>
                {resultados.porcentajeUtilidad > 0 && (
                  <p className="text-sm text-gray-500 mt-3">
                    * Basado en una utilidad de ${parseFloat(utilidad).toFixed(2)} por unidad.
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium py-6 text-base shadow-md hover:shadow-lg transition-all"
            >
              Calcular Inversión
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
