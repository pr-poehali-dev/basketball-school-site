import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProgramsSection = () => {
  const openRegistrationModal = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const programs = [
    {
      title: "Мини-баскет",
      age: "6-10 лет",
      description:
        "Первые шаги в баскетболе. Развитие координации, базовых навыков и любви к игре.",
      features: [
        "Игровая форма обучения",
        "Развитие моторики",
        "Командная работа",
      ],
      price: "3000₽/мес",
      icon: "Baby",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Юниоры",
      age: "11-15 лет",
      description:
        "Техническая подготовка и тактическое мышление. Участие в соревнованиях.",
      features: [
        "Техника владения мячом",
        "Тактика игры",
        "Физическая подготовка",
      ],
      price: "4000₽/мес",
      icon: "Users",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Профи",
      age: "16+ лет",
      description:
        "Серьезная подготовка для тех, кто хочет играть на высоком уровне.",
      features: [
        "Индивидуальная работа",
        "Спортивная психология",
        "Профессиональная подготовка",
      ],
      price: "5000₽/мес",
      icon: "Crown",
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Наши <span className="text-orange-500">Программы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Программы разработаны с учетом возрастных особенностей и уровня
            подготовки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${program.color}`}
              ></div>

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center`}
                >
                  <Icon
                    name={program.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-orange-500">
                  {program.age}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-600 text-center">
                  {program.description}
                </p>

                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-gray-800">
                      {program.price}
                    </span>
                  </div>
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={openRegistrationModal}
                  >
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto border-2 border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <Icon
                name="Gift"
                size={48}
                className="text-orange-500 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Первое занятие бесплатно!
              </h3>
              <p className="text-gray-600">
                Приходите на пробную тренировку и оцените качество нашего
                обучения
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
