// components/BackToTopButton.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUp } from 'lucide-react';
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    router.push('', '', { scroll: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  return (
    <button
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-4 right-4 p-4 bg-blue-500 border-white border-2 text-white rounded-full bg-blue transition-all focus:outline-none focus:ring focus:border-blue-300 z-50`}
      onClick={scrollToTop}
      
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTopButton;
