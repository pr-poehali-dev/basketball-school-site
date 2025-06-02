import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openRegistrationModal = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-500 to-blue-600 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-4 border-white"></div>
        <div className="absolute top-60 right-32 w-24 h-24 rounded-full border-2 border-white"></div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 rounded-full border-2 border-white"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Стань
            <span className="block text-orange-300">ЧЕМПИОНОМ</span>
            вместе с нами!
          </h1>

          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-lg">
            Профессиональная баскетбольная школа для детей и взрослых. Развивай
            навыки, характер и становись лучшей версией себя.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
              onClick={openRegistrationModal}
            >
              <Icon name="Play" size={20} />
              Записаться на пробное занятие
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              onClick={() => scrollToSection("programs")}
            >
              <Icon name="Phone" size={20} />
              Узнать подробнее
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300">500+</div>
              <div className="text-sm text-blue-100">Учеников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300">15</div>
              <div className="text-sm text-blue-100">Тренеров</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300">8</div>
              <div className="text-sm text-blue-100">Лет опыта</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center relative">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Баскетболист с мячом"
              className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
              <Icon name="Trophy" size={32} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
