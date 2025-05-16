
import React from 'react';
import Layout from '../components/Layout';
import { useParams, Link } from 'react-router-dom';
import { articleData } from '../data/articleData';
import { ArrowLeft } from 'lucide-react';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the article that matches the slug
  const article = articleData.find(article => article.slug === slug);
  
  // If no article found, show a message
  if (!article) {
    return (
      <Layout>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4">Artikel tidak ditemukan</h1>
              <p className="mb-6">Maaf, artikel yang Anda cari tidak tersedia.</p>
              <Link to="/artikel" className="mbti-button">
                Kembali ke Daftar Artikel
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/artikel" className="flex items-center text-mbti-deep-purple mb-8 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Semua Artikel
            </Link>
            
            <div className="mb-8">
              <img 
                src={article.image !== "/placeholder.svg" ? article.image : "/placeholder.svg"} 
                alt={article.title} 
                className="w-full h-56 sm:h-64 object-cover rounded-lg mb-6"
              />
              
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{article.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <span>Diterbitkan pada {article.publishDate || "15 Mei 2025"}</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {article.content.map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
              
              {article.sections && article.sections.map((section, i) => (
                <div key={i} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  {section.content.map((paragraph, j) => (
                    <p key={j} className="mb-4">{paragraph}</p>
                  ))}
                  
                  {section.list && (
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      {section.list.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticleDetail;
