import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('')
  
  const courses = [
    {
      id: 1,
      title: 'Основы импорта авто из Японии',
      description: 'Изучите все этапы покупки автомобиля на японских аукционах',
      duration: '8 недель',
      lessons: 24,
      students: 1250,
      rating: 4.9,
      price: '₽15 000',
      image: '/img/3c16b843-0a31-46ef-94f1-1be3a4b11cc3.jpg',
      level: 'Начинающий',
      progress: 0
    },
    {
      id: 2,
      title: 'Корейский автопром: от А до Я',
      description: 'Комплексное изучение рынка корейских автомобилей',
      duration: '6 недель',
      lessons: 18,
      students: 890,
      rating: 4.8,
      price: '₽12 000',
      image: '/img/8d5c511c-5afb-4e1e-9fb6-af70032bda1b.jpg',
      level: 'Средний',
      progress: 0
    },
    {
      id: 3,
      title: 'Электромобили из Китая',
      description: 'Современные тренды китайского автопрома и EV технологий',
      duration: '4 недели',
      lessons: 12,
      students: 650,
      rating: 4.7,
      price: '₽8 000',
      image: '/img/9784ed98-81da-49f9-b76d-23ab54a98428.jpg',
      level: 'Продвинутый',
      progress: 0
    }
  ]

  const skills = [
    { icon: 'BookOpen', title: 'Теория аукционов', desc: 'Изучите принципы работы автоаукционов' },
    { icon: 'Calculator', title: 'Расчет стоимости', desc: 'Научитесь правильно рассчитывать итоговую цену' },
    { icon: 'FileText', title: 'Документооборот', desc: 'Освойте все юридические аспекты' },
    { icon: 'Truck', title: 'Логистика', desc: 'Организация доставки и таможенного оформления' }
  ]

  const instructors = [
    { name: 'Дмитрий Иванов', role: 'Эксперт по японским аукционам', experience: '12 лет', avatar: '👨‍💼' },
    { name: 'Мария Ким', role: 'Специалист по корейскому рынку', experience: '8 лет', avatar: '👩‍💼' },
    { name: 'Андрей Лю', role: 'Консультант по китайским EV', experience: '5 лет', avatar: '👨‍🔬' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AUTO IMPORT ACADEMY</h1>
                <p className="text-sm text-blue-600">Школа импорта автомобилей из Азии</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Курсы</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Навыки</a>
              <a href="#instructors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Преподаватели</a>
              <a href="#success" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Успехи</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold mb-6">Изучай. Импортируй. Зарабатывай.</h2>
            <p className="text-xl mb-8 opacity-90">Единственная онлайн-академия по импорту автомобилей из Азии с практическими кейсами и менторской поддержкой</p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-12">
              <Input 
                placeholder="Найти курс или тему..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12"
              />
              <Select>
                <SelectTrigger className="bg-white/10 border-white/20 text-white h-12">
                  <SelectValue placeholder="Уровень" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Начинающий</SelectItem>
                  <SelectItem value="intermediate">Средний</SelectItem>
                  <SelectItem value="advanced">Продвинутый</SelectItem>
                </SelectContent>
              </Select>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8">
                <Icon name="Search" size={20} className="mr-2" />
                Найти курс
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">2000+</div>
                <div className="text-blue-200">Студентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">15</div>
                <div className="text-blue-200">Курсов</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-blue-200">Довольных</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-blue-200">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-3 py-1 mb-4">ПОПУЛЯРНЫЕ КУРСЫ</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Начните свое обучение сегодня</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Выберите курс и получите практические знания от экспертов с многолетним опытом в автоимпорте</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    {course.level}
                  </Badge>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-4 text-sm">
                      <span>⭐ {course.rating}</span>
                      <span>👥 {course.students}</span>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>📚 {course.lessons} уроков</span>
                    <span>⏰ {course.duration}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Прогресс</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Icon name="Play" size={16} className="mr-2" />
                      Начать курс
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600 text-white px-3 py-1 mb-4">НАВЫКИ</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Что вы изучите</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Получите практические навыки, которые позволят вам успешно импортировать автомобили</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon name={skill.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{skill.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-3 py-1 mb-4">ПРЕПОДАВАТЕЛИ</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Учитесь у экспертов</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Наши преподаватели - практикующие специалисты с многолетним опытом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
                <CardHeader className="pb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                    {instructor.avatar}
                  </div>
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{instructor.role}</CardDescription>
                  <Badge variant="outline" className="mx-auto mt-2">Опыт: {instructor.experience}</Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white px-3 py-1 mb-4">ИСТОРИИ УСПЕХА</Badge>
            <h2 className="text-4xl font-bold mb-4">Наши выпускники</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">Узнайте, как наши студенты применили знания на практике</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  📈
                </div>
                <CardTitle className="text-white">Алексей М.</CardTitle>
                <CardDescription className="text-white/80">
                  "За 6 месяцев импортировал 12 автомобилей. Прибыль составила ₽2.1 млн"
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  🚗
                </div>
                <CardTitle className="text-white">Елена К.</CardTitle>
                <CardDescription className="text-white/80">
                  "Открыла собственный автосалон специализированных авто из Японии"
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  🎓
                </div>
                <CardTitle className="text-white">Михаил Р.</CardTitle>
                <CardDescription className="text-white/80">
                  "Стал консультантом по автоимпорту, обучил уже 50+ учеников"
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Начните обучение прямо сейчас</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Получите доступ ко всем курсам и материалам. Первые 7 дней - бесплатно!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Icon name="Play" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={24} className="text-blue-400" />
                <h3 className="text-lg font-semibold">AUTO IMPORT ACADEMY</h3>
              </div>
              <p className="text-gray-400 text-sm">Лучшая онлайн-школа по импорту автомобилей из Азии</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Курсы для начинающих</li>
                <li>Продвинутые программы</li>
                <li>Индивидуальное обучение</li>
                <li>Корпоративные курсы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>База знаний</li>
                <li>Сообщество</li>
                <li>Техподдержка 24/7</li>
                <li>Менторство</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 +7 (495) 123-45-67</p>
                <p>📧 info@autoimportacademy.ru</p>
                <p>📍 Москва, ул. Образования, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 AUTO IMPORT ACADEMY. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index