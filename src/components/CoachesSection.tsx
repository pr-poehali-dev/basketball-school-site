import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CoachesSection = () => {
  const coaches = [
    {
      name: "Александр Петров",
      position: "Главный тренер",
      experience: "12 лет опыта",
      achievements: ["Мастер спорта РФ", "Тренер года 2022", "Воспитал 15 КМС"],
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialty: "Техническая подготовка",
    },
    {
      name: "Мария Иванова",
      position: "Тренер по ОФП",
      experience: "8 лет опыта",
      achievements: [
        "КМС по баскетболу",
        "Сертификат ФИБА",
        "Специалист по детям",
      ],
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialty: "Физическая подготовка",
    },
    {
      name: "Дмитрий Сидоров",
      position: "Тренер-методист",
      experience: "10 лет опыта",
      achievements: [
        "Экс-игрок Суперлиги",
        "Тренер сборной U-16",
        "100+ воспитанников",
      ],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialty: "Тактическая подготовка",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Наши <span className="text-orange-500">Тренеры</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональные тренеры с большим опытом работы и достижениями в
            спорте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coaches.map((coach, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-orange-500 text-xs px-2 py-1 rounded-full mb-2 inline-block">
                    {coach.specialty}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {coach.name}
                </h3>
                <p className="text-orange-500 font-semibold mb-2">
                  {coach.position}
                </p>
                <p className="text-gray-600 text-sm mb-4">{coach.experience}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <Icon
                      name="Award"
                      size={16}
                      className="text-orange-500 mr-2"
                    />
                    Достижения:
                  </h4>
                  <ul className="space-y-1">
                    {coach.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <Icon
                          name="Star"
                          size={12}
                          className="text-yellow-500 mr-2 flex-shrink-0"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Стань частью нашей команды!
            </h3>
            <p className="text-lg mb-6">
              Ищем талантливых тренеров для расширения нашей команды
              профессионалов
            </p>
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Узнать о вакансиях
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
