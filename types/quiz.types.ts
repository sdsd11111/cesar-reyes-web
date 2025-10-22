// Usamos los nombres de los componentes de Lucide directamente
type IconName = 'Search' | 'BarChart' | 'Eye' | 'ThumbsUp';

export interface Question {
  id: number;
  text: string;
  icon: IconName;
  yesFeedback: string;
  noFeedback: string;
  yesFeedbackDetail: string;
  noFeedbackDetail: string;
  imageDescription: string;
}

export interface QuizAnswers {
  [key: number]: boolean | null;
}

export interface FormData {
  name: string;
  whatsapp: string;
  company: string;
  message: string;
}

export interface BusinessSuccessQuizProps {
  title?: string;
  submitButtonText?: string;
  onSubmit?: (data: FormData, answers: QuizAnswers) => void;
  className?: string;
}
