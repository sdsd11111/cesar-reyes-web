'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BarChart, Eye, ThumbsUp, ArrowLeft, ArrowRight, Check, X } from 'lucide-react';

// Mapeo de tipos de íconos a componentes
type IconName = 'Search' | 'BarChart' | 'Eye' | 'ThumbsUp';

const iconComponents = {
  'Search': Search,
  'BarChart': BarChart,
  'Eye': Eye,
  'ThumbsUp': ThumbsUp
} as const;
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Question, QuizAnswers, FormData, BusinessSuccessQuizProps } from '@/types/quiz.types';

// Definición de preguntas con enfoque emocional
const QUESTIONS: (Omit<Question, 'yesFeedbackDetail' | 'noFeedbackDetail' | 'imageDescription'> & { yesOption: string; noOption: string; })[] = [
  {
    id: 1,
    text: "¿Tu menú actual atrapa al cliente en 3 segundos o lo aburre con un PDF que nadie quiere leer?",
    icon: 'Search' as const,
    yesOption: "Es una experiencia digital",
    noOption: "Es un PDF o Foto",
    yesFeedback: "✨ ¡Excelente! Un menú interactivo aumenta el ticket promedio un 20%. Pero, ¿está integrado a Google para que te encuentren cuando buscan dónde comer?",
    noFeedback: "💔 Perdemos ventas. El 70% de usuarios móviles odia hacer zoom en PDFs. Un menú digital vende por ti antes de que el cliente llegue, mostrando tus platos en todo su esplendor.",
  },
  {
    id: 2,
    text: "¿Puedes actualizar precios y platos del día en tiempo real sin llamar a un diseñador?",
    icon: 'BarChart' as const,
    yesOption: "Sí, tengo control total",
    noOption: "No, dependo de terceros",
    yesFeedback: "🚀 Esa agilidad es clave. Ahora, ¿puedes medir qué platos son los más vistos vs los más pedidos para optimizar tu oferta y rentabilidad?",
    noFeedback: "😟 Tu cocina es rápida, tu marketing no. Mientras esperas al diseñador, tu competencia ya lanzó la oferta del día. Necesitas autonomía total para vender lo que tienes hoy.",
  },
  {
    id: 3,
    text: "¿Sabes quiénes son tus clientes más fieles y tienes sus datos para que vuelvan?",
    icon: 'ThumbsUp' as const,
    yesOption: "Sí, tengo su base de datos",
    noOption: "No sé quiénes son",
    yesFeedback: "💎 ¡Oro puro! El activo más grande de un restaurante es su lista de clientes. Úsala para llenar mesas los martes flojos con promociones directas.",
    noFeedback: "💸 Grave error. Depender de que 'pasen por ahí' es una lotería. Con un menú digital, capturas datos y conviertes visitantes únicos en clientes frecuentes sin pagar publicidad.",
  },
  {
    id: 4,
    text: "¿Tu personal pierde tiempo explicando el menú o tomando pedidos que podrían automatizarse?",
    icon: 'Eye' as const,
    yesOption: "Sí, mucho tiempo operativo",
    noOption: "No, todo fluye",
    yesFeedback: "⏳ El tiempo de tus meseros vale dinero. Un menú digital bien hecho educa al cliente y agiliza el pedido, permitiendo que tu equipo se enfoque en el servicio y la venta sugestiva.",
    noFeedback: "🏆 Perfecto. Entonces estás listo para escalar. ¿Estás usando esa eficiencia para abrir nuevos canales como delivery propio sin comisiones a las apps?",
  }
];

const BusinessSuccessQuizEmocional = ({
  title = "¿Tu negocio está perdiendo dinero sin que te des cuenta?",
  submitButtonText = "Descubre el potencial oculto de tu negocio. Hablemos.",
  onSubmit,
  className = ""
}: BusinessSuccessQuizProps) => {
  const [isClient, setIsClient] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<boolean | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAnswer = (answer: boolean) => {
    setCurrentAnswer(answer);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentAnswer !== null) {
      setAnswers(prev => ({ ...prev, [QUESTIONS[currentQuestion].id]: currentAnswer }));
      setShowFeedback(false);
      setCurrentAnswer(null);
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const handlePrevQuestion = () => {
    if (showFeedback) {
      setShowFeedback(false);
      setCurrentAnswer(null);
    } else if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'negocios@cesarreyesjaramillo.com',
          subject: 'Nueva consulta desde el Test de Negocio (Emocional)',
          html: `
            <h2>Nueva consulta desde el Test de Negocio (Emocional)</h2>
            <p><strong>Nombre:</strong> ${formData.name}</p>
            <p><strong>WhatsApp:</strong> ${formData.whatsapp}</p>
            <p><strong>Empresa:</strong> ${formData.company || 'No especificada'}</p>
            <p><strong>Mensaje:</strong> ${formData.message || 'No especificado'}</p>
            <h3>Respuestas del test:</h3>
            <ul>
              ${Object.entries(answers).map(([questionId, answer]) => {
            const question = QUESTIONS.find(q => q.id === parseInt(questionId));
            return question ?
              `<li>${question.text}: <strong>${answer ? question.yesOption : question.noOption}</strong> - ${answer ? question.yesFeedback : question.noFeedback}</li>` : '';
          }).join('')}
            </ul>
          `,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Error al enviar el formulario');
      if (onSubmit) await onSubmit(formData, answers);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateSummary = () => {
    return QUESTIONS.map(question => {
      const answer = answers[question.id];
      return answer !== undefined ? (answer ? question.yesFeedback : question.noFeedback) : null;
    }).filter(Boolean).join('\n\n');
  };

  useEffect(() => {
    if (isClient && showResults && !formData.message) {
      setFormData(prev => ({ ...prev, message: `Siento que mi negocio puede mejorar en estos aspectos:\n\n${generateSummary()}\n\nQuiero explorar cómo pueden ayudarme a cambiar esto:` }));
    }
  }, [showResults, formData.message, isClient]);

  const progress = showResults ? 100 : ((currentQuestion) / QUESTIONS.length) * 100;

  if (!isClient) {
    return (
      <div
        ref={containerRef}
        className={`w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_32px_8px_rgba(255,255,255,0.18)] transition-all duration-500 ${className}`}
        style={{ minHeight: '400px', backgroundColor: '#121212' }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_32px_8px_rgba(255,255,255,0.18)] transition-all duration-500 ${className}`}
      style={{ backgroundColor: '#121212', backgroundImage: 'none' }}
    >
      <div className="h-2 bg-gray-800 w-full">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-800"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          {title}
        </h2>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {!showFeedback ? (
                <>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-3 bg-blue-600/20 rounded-full">
                      {(() => {
                        const Icon = iconComponents[QUESTIONS[currentQuestion].icon];
                        return <Icon className="w-8 h-8 text-blue-400" />;
                      })()}
                    </div>
                    <p className="text-lg md:text-xl text-center text-gray-200">
                      {QUESTIONS[currentQuestion].text}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 max-w-xs mx-auto sm:mx-0 bg-transparent hover:bg-white/20 border-white text-white hover:text-white h-14 text-base"
                      onClick={() => handleAnswer(false)}
                    >
                      <X className="mr-2 h-5 w-5" /> {QUESTIONS[currentQuestion].noOption}
                    </Button>

                    <Button
                      type="button"
                      className="flex-1 max-w-xs mx-auto sm:mx-0 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-gray-900 h-14 text-base"
                      onClick={() => handleAnswer(true)}
                    >
                      <Check className="mr-2 h-5 w-5" /> {QUESTIONS[currentQuestion].yesOption}
                    </Button>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 space-y-6"
                >
                  <div className="text-center">
                    <p className="text-gray-300 text-lg">
                      {currentAnswer ? QUESTIONS[currentQuestion].yesFeedback : QUESTIONS[currentQuestion].noFeedback}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="button"
                      className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-gray-900 h-12 px-8 text-base"
                      onClick={handleNextQuestion}
                    >
                      {currentQuestion < QUESTIONS.length - 1 ? 'Siguiente pregunta' : 'Ver mis oportunidades'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentQuestion > 0 && (
                <div className="flex justify-center">
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-gray-400 hover:text-white"
                    onClick={handlePrevQuestion}
                  > <ArrowLeft className="mr-2 h-4 w-4" />
                    {showFeedback ? 'Volver a la pregunta' : 'Pregunta anterior'}
                  </Button>
                </div>
              )}

              {!showFeedback && (
                <div className="text-center text-sm text-gray-400 mt-2">
                  Pregunta {currentQuestion + 1} de {QUESTIONS.length}
                </div>
              )}
            </motion.div>
          ) : !submitSuccess ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <p className="text-gray-300 text-lg">
                  Estás a un paso de transformar la historia de tu negocio. Completa tus datos y hablemos sobre cómo hacerlo realidad.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                  <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp</label>
                  <Input id="whatsapp" name="whatsapp" type="tel" required value={formData.whatsapp} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" placeholder="+593..." />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Empresa</label>
                  <Input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" placeholder="El nombre de tu negocio" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Tu mayor desafío ahora mismo</label>
                  <Textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button type="button" variant="outline" onClick={() => setShowResults(false)} className="flex-1 max-w-xs mx-auto sm:mx-0 bg-transparent hover:bg-gray-800 border-gray-700 text-gray-300"> <ArrowLeft className="mr-2 h-4 w-4" /> Volver </Button>
                <Button type="submit" disabled={isSubmitting} className="flex-1 max-w-xs mx-auto sm:mx-0 bg-gradient-to-r from-blue-600 to-blue-800 h-14 text-base"> {isSubmitting ? 'Enviando...' : submitButtonText} {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />} </Button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">¡Hemos recibido tu solicitud!</h3>
              <p className="text-gray-300 mb-6">
                Gracias por dar el primer paso. Nos pondremos en contacto contigo muy pronto.
              </p>
              <Button onClick={() => { setShowResults(false); setCurrentQuestion(0); setAnswers({}); setFormData({ name: '', whatsapp: '', company: '', message: '' }); setSubmitSuccess(false); }} className="bg-gradient-to-r from-blue-600 to-blue-800">
                Hacer el test de nuevo
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BusinessSuccessQuizEmocional;
