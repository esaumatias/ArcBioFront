import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

// Hook para detectar quando o elemento entra na tela
const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 } // Ajuste o valor de threshold conforme necessário
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};

// Componente para animação de fade-in que ocorre apenas uma vez
const FadeInOnScroll = ({ children }) => {
  const ref = React.useRef();
  const isVisible = useOnScreen(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  // Definindo a animação com react-spring
  const fadeInStyle = useSpring({
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 250, friction: 25 }, // Você pode ajustar para o efeito desejado
  });

  return (
    <animated.div ref={ref} style={fadeInStyle}>
      {children}
    </animated.div>
  );
};

export default FadeInOnScroll;
