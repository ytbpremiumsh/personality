
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

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
  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "Kenali Si Pemikir – INTJ",
      excerpt: "INTJ adalah salah satu dari 16 tipe kepribadian MBTI. Dikenal sebagai 'Si Arsitek' atau 'Si Pemikir Strategis', INTJ dikenal dengan kemampuan analitis yang tajam dan pemikiran yang visioner.",
      image: "/placeholder.svg",
      slug: "kenali-si-pemikir-intj"
    },
    {
      id: 2,
      title: "ENFP: Si Petualang Yang Penuh Inspirasi",
      excerpt: "ENFP dikenal sebagai tipe kepribadian yang penuh energi, kreatif dan selalu mencari makna dalam setiap pengalaman. Mereka adalah pemimpin yang inspiratif dan inovatif.",
      image: "/placeholder.svg",
      slug: "enfp-si-petualang-penuh-inspirasi"
    },
    {
      id: 3,
      title: "ISFJ: Pelindung Yang Setia",
      excerpt: "ISFJ dikenal sebagai 'Si Pelindung' dan merupakan salah satu tipe kepribadian yang paling perhatian dan setia. Mereka selalu siap membantu orang lain dengan ketulusan.",
      image: "/placeholder.svg",
      slug: "isfj-pelindung-yang-setia"
    },
    {
      id: 4,
      title: "ESTP: Sang Penggerak Yang Pragmatis",
      excerpt: "ESTP adalah tipe kepribadian yang energik, pragmatis, dan selalu siap untuk aksi. Mereka hidup di masa kini dan memiliki kemampuan adaptasi yang luar biasa.",
      image: "/placeholder.svg",
      slug: "estp-sang-penggerak-pragmatis"
    },
    {
      id: 5,
      title: "Karir Terbaik untuk Tipe INFP",
      excerpt: "Sebagai seorang INFP, kamu memiliki bakat unik yang bisa berkembang di jalur karir tertentu. Artikel ini membahas pilihan karir terbaik yang cocok dengan kepribadianmu.",
      image: "/placeholder.svg",
      slug: "karir-terbaik-untuk-tipe-infp"
    },
    {
      id: 6,
      title: "Tips Komunikasi Efektif Antar Tipe MBTI",
      excerpt: "Memahami tipe MBTI bisa sangat membantu dalam berkomunikasi dengan orang lain. Temukan tips komunikasi efektif untuk berbagai tipe kepribadian dalam artikel ini.",
      image: "/placeholder.svg",
      slug: "tips-komunikasi-efektif-antar-tipe-mbti"
    }
  ];

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
            {articles.map(article => (
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
