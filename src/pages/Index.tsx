import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('')
  
  const vehicles = [
    {
      id: 1,
      title: 'Toyota Supra 2024',
      price: '₽4 850 000',
      year: 2024,
      country: 'Япония',
      mileage: '12 000 км',
      image: '/img/3c16b843-0a31-46ef-94f1-1be3a4b11cc3.jpg',
      auction: 'USS Tokyo',
      status: 'В наличии'
    },
    {
      id: 2,
      title: 'Genesis GV80 2023',
      price: '₽6 200 000',
      year: 2023,
      country: 'Корея',
      mileage: '8 500 км',
      image: '/img/8d5c511c-5afb-4e1e-9fb6-af70032bda1b.jpg',
      auction: 'Hyundai Direct',
      status: 'Под заказ'
    },
    {
      id: 3,
      title: 'NIO ES8 2024',
      price: '₽5 100 000',
      year: 2024,
      country: 'Китай',
      mileage: '5 000 км',
      image: '/img/9784ed98-81da-49f9-b76d-23ab54a98428.jpg',
      auction: 'NIO Direct',
      status: 'В пути'
    }
  ]

  const services = [
    { icon: 'Truck', title: 'Доставка', desc: 'Быстрая доставка из Азии' },
    { icon: 'Shield', title: 'Гарантия', desc: 'Проверка перед покупкой' },
    { icon: 'Wrench', title: 'Сервис', desc: 'Техническое обслуживание' },
    { icon: 'FileText', title: 'Документы', desc: 'Полное оформление' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
                <Icon name="Car" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AUTO IMPORT ASIA</h1>
                <p className="text-sm text-gray-600">Импорт авто из Японии, Китая, Кореи</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="text-gray-700 hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#delivery" className="text-gray-700 hover:text-blue-600 transition-colors">Доставка</a>
              <a href="#auctions" className="text-gray-700 hover:text-blue-600 transition-colors">Аукционы</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Автомобили из Азии</h2>
          <p className="text-xl mb-8 opacity-90">Прямые поставки с японских, корейских и китайских аукционов</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Input 
              placeholder="Поиск по модели или марке..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Select>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Страна" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="japan">Япония</SelectItem>
                <SelectItem value="korea">Корея</SelectItem>
                <SelectItem value="china">Китай</SelectItem>
              </SelectContent>
            </Select>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Icon name="Search" size={20} className="mr-2" />
              Найти
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Авто в месяц</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Страны</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Catalog */}
      <section id="catalog" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Каталог автомобилей</h2>
            <p className="text-lg text-gray-600">Актуальные предложения с азиатских аукционов</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-blue-600">
                    {vehicle.status}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{vehicle.title}</CardTitle>
                    <Badge variant="outline">{vehicle.country}</Badge>
                  </div>
                  <CardDescription className="flex items-center space-x-4 text-sm">
                    <span>{vehicle.year} г.</span>
                    <span>{vehicle.mileage}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">{vehicle.price}</span>
                    <span className="text-sm text-gray-500">Аукцион: {vehicle.auction}</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Узнать детали
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600">Полный цикл импорта автомобилей</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Auction Integration */}
      <section id="auctions" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Интеграция с аукционами</h2>
            <p className="text-lg opacity-90">Прямой доступ к ведущим азиатским автоаукционам</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  🇯🇵
                </div>
                <CardTitle>Японские аукционы</CardTitle>
                <CardDescription className="text-white/70">
                  USS, TAA, JU, ARAI - прямые поставки
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  🇰🇷
                </div>
                <CardTitle>Корейские дилеры</CardTitle>
                <CardDescription className="text-white/70">
                  Hyundai, Kia, Genesis официальные каналы
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  🇨🇳
                </div>
                <CardTitle>Китайские производители</CardTitle>
                <CardDescription className="text-white/70">
                  BYD, NIO, XPeng прямые контракты
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Процесс доставки</h2>
              <p className="text-lg text-gray-600">От аукциона до вашего гаража</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Выбор авто', desc: 'Подбираем авто на аукционах' },
                { step: '2', title: 'Покупка', desc: 'Участвуем в торгах' },
                { step: '3', title: 'Доставка', desc: 'Морская перевозка 20-30 дней' },
                { step: '4', title: 'Получение', desc: 'Оформление и передача' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AUTO IMPORT ASIA</h3>
              <p className="text-gray-400 text-sm">Надежный импорт автомобилей из Азии с 2009 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Поиск автомобилей</li>
                <li>Участие в аукционах</li>
                <li>Доставка</li>
                <li>Таможенное оформление</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Страны</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>🇯🇵 Япония</li>
                <li>🇰🇷 Корея</li>
                <li>🇨🇳 Китай</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 +7 (495) 123-45-67</p>
                <p>📧 info@autoimportasia.ru</p>
                <p>📍 Москва, ул. Автомобильная, 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 AUTO IMPORT ASIA. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index