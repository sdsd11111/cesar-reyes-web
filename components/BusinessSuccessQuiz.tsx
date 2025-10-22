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

// Definición de preguntas
interface QuizQuestion extends Omit<Question, 'yesFeedbackDetail' | 'noFeedbackDetail'> {
  yesOption: string;
  noOption: string;
  image: string;
  imageDescription: string;
}

const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "¿Cuando alguien busca en Google lo que tú vendes en Loja, apareces?",
    icon: 'Search' as const,
    yesOption: "Sí aparezco",
    noOption: "No aparezco",
    yesFeedback: "Bien, pero ¿en qué posición? Estar en la página 2 de Google es como no existir. El 90% de los clics van a los primeros 3 resultados. Si no estás en el TOP 3, sigues perdiendo clientes.",
    noFeedback: "Cada día sin aparecer = clientes perdidos. Mientras tú no estás visible, tus competidores reciben TUS clientes. En Loja, 7 de cada 10 personas buscan en Google antes de comprar.",
    image: "/images/google.webp",
    imageDescription: "Imagen de una pantalla de Google con resultados de búsqueda"
  },
  {
    id: 2,
    text: "¿Sabes exactamente cuántas veces al mes buscan en Google lo que tú vendes?",
    icon: 'BarChart' as const,
    yesOption: "Más o menos sé",
    noOption: "No tengo idea",
    yesFeedback: "'Más o menos' no genera ventas. Necesitas números exactos: cuántas búsquedas, qué competencia, qué oportunidades. Las decisiones basadas en datos siempre superan a las corazonadas.",
    noFeedback: "Estás disparando a ciegas. Sin datos reales de búsquedas, desperdicias tiempo y dinero en estrategias que no funcionan. Analizamos las palabras exactas que usan tus clientes para encontrarte.",
    image: "/images/busquedas_mensuales.webp",
    imageDescription: "Gráfico mostrando volumen de búsquedas mensuales en Google"
  },
  {
    id: 3,
    text: "Si un cliente potencial entra a tu sitio web hoy, ¿sabría en 5 segundos por qué elegirte a ti y no a la competencia?",
    icon: 'Eye' as const,
    yesOption: "Sí es obvio",
    noOption: "No está claro",
    yesFeedback: "Probémoslo. Si es tan obvio, ¿por qué no tienes más clientes nuevos cada mes? A veces lo que es claro para nosotros, no lo es para el cliente. Una auditoría te lo confirma.",
    noFeedback: "5 segundos para convencer o perder. Tu web debe gritar tu ventaja competitiva inmediatamente. Si el visitante no entiende tu valor único, se va donde la competencia.",
    image: "/images/palabras_claves.webp",
    imageDescription: "Imagen mostrando palabras clave relevantes para tu negocio"
  },
  {
    id: 4,
    text: "¿Estás obteniendo al menos 5 clientes nuevos al mes gracias a tu presencia en internet?",
    icon: 'ThumbsUp' as const,
    yesOption: "Sí, los tengo",
    noOption: "No, me cuesta",
    yesFeedback: "Excelente! Imagina duplicar o triplicar esa cifra. Con estrategias probadas, podemos convertir tu negocio en el referente de tu sector en Loja.",
    noFeedback: "No estás solo. El 80% de los negocios en Loja no saben cómo atraer clientes por internet. La buena noticia: con el enfoque correcto, puedes destacar y crecer rápidamente.",
    image: "/images/google.webp",
    imageDescription: "Imagen de una pantalla de Google con resultados de búsqueda"
  },
];

const BusinessSuccessQuiz = ({
  title = "¿Listo para cumplir tus metas?",
  submitButtonText = "Agenda una Llamada",
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

  // Ensure this only runs on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Eliminado el efecto de scroll automático para evitar saltos no deseados

  const handleAnswer = (answer: boolean) => {
    setCurrentAnswer(answer);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentAnswer !== null) {
      setAnswers(prev => ({
        ...prev,
        [QUESTIONS[currentQuestion].id]: currentAnswer
      }));
      
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Enviar datos al endpoint de la API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'negocios@cesarreyesjaramillo.com',
          subject: 'Nueva consulta desde el Test de Negocio',
          html: `
            <h2>Nueva consulta desde el Test de Negocio</h2>
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

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      // Si hay una función onSubmit personalizada, la ejecutamos
      if (onSubmit) {
        await onSubmit(formData, answers);
      }
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Aquí podrías agregar un estado para mostrar un mensaje de error al usuario
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generar resumen basado en las respuestas
  const generateSummary = () => {
    return QUESTIONS.map(question => {
      const answer = answers[question.id];
      return answer !== undefined 
        ? answer 
          ? question.yesFeedback 
          : question.noFeedback
        : null;
    }).filter(Boolean).join('\n\n');
  };

  // Efecto para inicializar el mensaje con el resumen
  useEffect(() => {
    if (isClient && showResults && !formData.message) {
      setFormData(prev => ({
        ...prev,
        message: `Con base en tus respuestas, creemos que podríamos ayudarte en estos puntos:\n\n${generateSummary()}\n\nCuéntanos más para darte un análisis más preciso:`
      }));
    }
  }, [showResults, formData.message, isClient]);

  // Calcular progreso
  const progress = showResults 
    ? 100 
    : ((currentQuestion) / QUESTIONS.length) * 100;

  // Don't render anything on the server
  if (!isClient) {
    return (
      <div 
        ref={containerRef}
        className={`w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_32px_8px_rgba(255,255,255,0.18)] transition-all duration-500 ${className}`}
        style={{ 
          minHeight: '400px',
          backgroundColor: '#121212' // Forzando el color de fondo aquí también
        }}
      />
    );
  }

  const currentQuestionData = QUESTIONS[currentQuestion];
  const progressPercentage = Math.round((currentQuestion / QUESTIONS.length) * 100);

  return (
    <div 
      ref={containerRef}
      className={`w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl transition-all duration-500 ${className}`}
    >
      {/* Barra de progreso mejorada */}
      <div className="h-3 bg-gray-800 w-full relative">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
        <div className="absolute top-0 right-0 h-full flex items-center pr-4 text-xs font-medium text-gray-300">
          {progressPercentage}%
        </div>
      </div>

      <div className="p-6 md:p-10">
        {/* Título con gradiente */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-3">
            {title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

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
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Imagen de la pregunta */}
                  <motion.div 
                    key={`image-${currentQuestion}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative h-64 md:h-80 rounded-xl overflow-hidden border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <img 
                      src={currentQuestionData.image} 
                      alt={`Paso ${currentQuestion + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mb-2 mx-auto">
                        {currentQuestion + 1}
                      </div>
                    </div>
                  </motion.div>

                  {/* Contenido de la pregunta */}
                  <div className="space-y-6">
                    {/* Pregunta actual */}
                    <div className="flex flex-col items-start space-y-4">
                      <div className="p-3 bg-blue-600/20 rounded-lg inline-flex items-center">
                        {(() => {
                          const Icon = iconComponents[currentQuestionData.icon];
                          return <Icon className="w-6 h-6 text-blue-400" />; 
                        })()}
                        <span className="ml-2 text-sm font-medium text-blue-300">
                          Pregunta {currentQuestion + 1} de {QUESTIONS.length}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                        {currentQuestionData.text}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Selecciona la opción que mejor describa tu situación actual
                      </p>
                    </div>

                    {/* Controles de navegación */}
                    <div className="flex flex-col space-y-3">
                      <Button
                        type="button"
                        className="group w-full justify-start px-6 py-6 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                        onClick={() => handleAnswer(true)}
                      >
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                          <Check className="h-5 w-5" />
                        </div>
                        {currentQuestionData.yesOption}
                      </Button>
                      
                      <Button
                        type="button"
                        variant="outline"
                        className="group w-full justify-start px-6 py-6 text-lg border-gray-600 hover:bg-gray-800/50 hover:border-gray-500 text-gray-200 transition-all duration-300"
                        onClick={() => handleAnswer(false)}
                      >
                        <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center mr-3 group-hover:bg-gray-600/50 transition-colors">
                          <X className="h-5 w-5" />
                        </div>
                        {currentQuestionData.noOption}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Feedback después de responder */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 space-y-6"
                >
                  <div className="text-center">
                    <p className="text-gray-300 text-lg">
                      {currentAnswer 
                        ? QUESTIONS[currentQuestion].yesFeedback 
                        : QUESTIONS[currentQuestion].noFeedback}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button
                      type="button"
                      className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-gray-900 h-12 px-8 text-base"
                      onClick={handleNextQuestion}
                    >
                      {currentQuestion < QUESTIONS.length - 1 ? 'Siguiente pregunta' : 'Ver resultados'}
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
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> 
                    {showFeedback ? 'Volver a la pregunta' : 'Volver a la pregunta anterior'}
                  </Button>
                </div>
              )}

              {!showFeedback && (
                <div className="flex justify-center space-x-2 mt-6">
                  {QUESTIONS.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index <= currentQuestion 
                          ? 'bg-blue-500 w-6' 
                          : 'bg-gray-700 w-2'
                      }`}
                    />
                  ))}
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
                  Solo si buscas cambiar la realidad de tu actividad económica, comparte conmigo esta información, rellena con tus datos personales y de tu empresa, y agenda una consultoría hoy mismo
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">
                    WhatsApp
                  </label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre de la empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nombre de tu negocio o empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué quieres conseguir?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowResults(false)}
                  className="flex-1 max-w-xs mx-auto sm:mx-0 bg-transparent hover:bg-gray-800 border-gray-700 text-gray-300 hover:text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Volver
                </Button>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 max-w-xs mx-auto sm:mx-0 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 h-14 text-base"
                >
                  {isSubmitting ? 'Enviando...' : submitButtonText}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
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
              <h3 className="text-xl font-bold text-white mb-2">¡Recibimos tu solicitud!</h3>
              <p className="text-gray-300 mb-6">
                Nos pondremos en contacto contigo a la brevedad para agendar tu cita.
              </p>
              <Button
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                  setFormData({
                    name: '',
                    whatsapp: '',
                    company: '',
                    message: ''
                  });
                  setSubmitSuccess(false);
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700"
              >
                Realizar otro test
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BusinessSuccessQuiz;