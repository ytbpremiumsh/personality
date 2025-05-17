
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { articleData } from '../data/articleData';
import { mbtiResults } from '../data/testQuestions';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

type ArticleCardProps = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, image, slug }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:translate-y-[-5px]">
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-5 px-5">
        <Link 
          to={`/artikel/${slug}`} 
          className="text-mbti-deep-purple font-medium hover:underline inline-flex items-center"
        >
          Baca Selengkapnya
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
};

const Articles: React.FC = () => {
  return (
    <Layout>
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-mbti-blue to-mbti-purple bg-opacity-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-mbti-deep-purple text-white font-semibold mb-4">
              Pelajari 16 Tipe MBTI
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Artikel Kepribadian</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Jelajahi berbagai artikel menarik tentang 16 tipe kepribadian MBTI dan tips pengembangan diri.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articleData.map(article => (
              <ArticleCard 
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                slug={article.slug}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Kenali Semua 16 Tipe Kepribadian MBTI</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.keys(mbtiResults).map((type) => (
                <Link 
                  key={type} 
                  to={`/artikel/mbti-${type.toLowerCase()}`}
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
                >
                  <h3 className="text-xl font-bold text-mbti-deep-purple">{type}</h3>
                  <p className="text-gray-600 text-sm">{mbtiResults[type as keyof typeof mbtiResults].title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
