import { PortfolioData } from '../types';

interface PortfolioCategoriesProps {
  categories: PortfolioData['categories'];
  onSelectCategory: (category: { id: string }) => void;
}

const PortfolioCategories = ({ categories, onSelectCategory }: PortfolioCategoriesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((category) => (
        <div 
          key={category.id}
          className="group relative bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg overflow-hidden cursor-pointer"
          onClick={() => onSelectCategory(category)}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 text-3xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {category.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
            <p className="text-gray-600 mb-6">{category.description}</p>
            <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Ver servicios
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCategories;
