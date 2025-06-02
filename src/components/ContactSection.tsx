import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Готов начать тренировки?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Свяжись с нами любым удобным способом и запишись на первое
            бесплатное занятие
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Icon name="Calendar" size={24} className="mr-3" />
                Записаться на тренировку
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
              <div>
                <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">Выберите программу</option>
                  <option value="mini">Мини-баскет (6-10 лет)</option>
                  <option value="junior">Юниоры (11-15 лет)</option>
                  <option value="pro">Профи (16+ лет)</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Дополнительная информация"
                  rows={3}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
                ></textarea>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                    <p className="opacity-90">г. Москва, ул. Спортивная, 15</p>
                    <p className="opacity-90">Спортивный комплекс "Чемпион"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                    <p className="opacity-90">+7 (495) 123-45-67</p>
                    <p className="opacity-90">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Расписание</h3>
                    <p className="opacity-90">Пн-Пт: 16:00 - 21:00</p>
                    <p className="opacity-90">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/30 text-white hover:bg-white/20"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/30 text-white hover:bg-white/20"
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/30 text-white hover:bg-white/20"
                >
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
