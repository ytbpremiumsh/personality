
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { articleData } from '../data/articleData';

type ArticleCardProps = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, image, slug }) => {
  return (
    <div className="mbti-card hover:translate-y-[-5px]">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
      <Link to={`/artikel/${slug}`} className="text-mbti-deep-purple font-medium hover:underline">
        Baca Selengkapnya
      </Link>
    </div>
  );
};

const Articles: React.FC = () => {
  return (
    <Layout>
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Artikel Kepribadian</h1>
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
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
