import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [childName, setChildName] = useState("");
  const [photoNumbers, setPhotoNumbers] = useState({
    cover: "",
    spread1: "",
    generalSpread: "",
    collages: "",
  });

  const handlePhotoSubmit = () => {
    if (!childName || !photoNumbers.cover) {
      alert("Пожалуйста, заполните обязательные поля");
      return;
    }
    alert(`Фотографии для ${childName} выбраны успешно!`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Icon name="Camera" className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                ФотоРелеликьи
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="User" className="h-4 w-4 mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Система отбора фотографий для детских садов и школ
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Простой и удобный способ для родителей выбрать лучшие фотографии
                своих детей для выпускных альбомов и памятных съёмок
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  <Icon name="GraduationCap" className="h-4 w-4 mr-1" />
                  Выпускные альбомы
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  <Icon name="Camera" className="h-4 w-4 mr-1" />
                  Костюмированные съёмки
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  <Icon name="Image" className="h-4 w-4 mr-1" />
                  Сюжетные фото
                </Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/img/39cf0158-92ec-4e04-9aaf-f63e355f58ea.jpg"
                alt="Фотостудия"
                className="rounded-lg shadow-lg max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Выберите ваше учреждение
            </h3>
            <p className="text-lg text-gray-600">
              Найдите свой детский сад или школу для доступа к фотографиям
            </p>
          </div>

          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="region"
                    className="text-sm font-medium text-gray-700"
                  >
                    Регион / Область
                  </Label>
                  <Select
                    value={selectedRegion}
                    onValueChange={setSelectedRegion}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Выберите регион" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow">Москва</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                      <SelectItem value="moscow-region">
                        Московская область
                      </SelectItem>
                      <SelectItem value="rostov">Ростовская область</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="city"
                    className="text-sm font-medium text-gray-700"
                  >
                    Город / Населённый пункт
                  </Label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow-city">Москва</SelectItem>
                      <SelectItem value="podolsk">Подольск</SelectItem>
                      <SelectItem value="khimki">Химки</SelectItem>
                      <SelectItem value="balashikha">Балашиха</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="institution"
                    className="text-sm font-medium text-gray-700"
                  >
                    Детский сад / Школа / ВУЗ
                  </Label>
                  <Select
                    value={selectedInstitution}
                    onValueChange={setSelectedInstitution}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Выберите учреждение" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ds-123">
                        Детский сад №123 "Радуга"
                      </SelectItem>
                      <SelectItem value="school-45">
                        Школа №45 им. Пушкина
                      </SelectItem>
                      <SelectItem value="lyceum-1">Лицей №1</SelectItem>
                      <SelectItem value="mgu">МГУ им. Ломоносова</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="group"
                    className="text-sm font-medium text-gray-700"
                  >
                    Группа / Класс
                  </Label>
                  <Select
                    value={selectedGroup}
                    onValueChange={setSelectedGroup}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Выберите группу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="group-a">
                        Группа "А" (подготовительная)
                      </SelectItem>
                      <SelectItem value="group-b">
                        Группа "Б" (старшая)
                      </SelectItem>
                      <SelectItem value="class-11a">11-А класс</SelectItem>
                      <SelectItem value="class-9b">9-Б класс</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                disabled={
                  !selectedRegion ||
                  !selectedCity ||
                  !selectedInstitution ||
                  !selectedGroup
                }
              >
                <Icon name="ArrowRight" className="h-5 w-5 mr-2" />
                Перейти к фотографиям
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Demo Photo Selection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Демо: Отбор фотографий для выпускного альбома
            </h3>
            <p className="text-lg text-gray-600">
              Пример формы отбора фотографий для родителей
            </p>
          </div>

          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="BookOpen" className="h-5 w-5 text-blue-600" />
                <span>Выпускной альбом - Детский сад №123 "Радуга"</span>
              </CardTitle>
              <CardDescription>
                Группа "А" (подготовительная) • Макет "Классический"
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Правила отбора для макета "Классический":
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Фото на обложку: 1 кадр (портрет, хорошее качество)</li>
                  <li>
                    • Фото на 1 разворот: 2-3 кадра (различные активности)
                  </li>
                  <li>• Фото на общий разворот: 1 кадр (групповое фото)</li>
                  <li>• Фото на коллажи: 4-6 кадров (различные моменты)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="childName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Фамилия и имя ребёнка *
                  </Label>
                  <Input
                    id="childName"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="Иванов Иван"
                    className="mt-1"
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="cover"
                      className="text-sm font-medium text-gray-700"
                    >
                      Фото на обложку *
                    </Label>
                    <Input
                      id="cover"
                      value={photoNumbers.cover}
                      onChange={(e) =>
                        setPhotoNumbers({
                          ...photoNumbers,
                          cover: e.target.value,
                        })
                      }
                      placeholder="Например: 0045"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="spread1"
                      className="text-sm font-medium text-gray-700"
                    >
                      Фото на 1 разворот
                    </Label>
                    <Input
                      id="spread1"
                      value={photoNumbers.spread1}
                      onChange={(e) =>
                        setPhotoNumbers({
                          ...photoNumbers,
                          spread1: e.target.value,
                        })
                      }
                      placeholder="Например: 0067, 0089, 0156"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="generalSpread"
                      className="text-sm font-medium text-gray-700"
                    >
                      Фото на общий разворот
                    </Label>
                    <Input
                      id="generalSpread"
                      value={photoNumbers.generalSpread}
                      onChange={(e) =>
                        setPhotoNumbers({
                          ...photoNumbers,
                          generalSpread: e.target.value,
                        })
                      }
                      placeholder="Например: 0234"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="collages"
                      className="text-sm font-medium text-gray-700"
                    >
                      Фото на коллажи
                    </Label>
                    <Input
                      id="collages"
                      value={photoNumbers.collages}
                      onChange={(e) =>
                        setPhotoNumbers({
                          ...photoNumbers,
                          collages: e.target.value,
                        })
                      }
                      placeholder="Например: 0278, 0301, 0445, 0567"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  <Button variant="outline" size="lg">
                    <Icon name="RotateCcw" className="h-4 w-4 mr-2" />
                    Изменить
                  </Button>
                  <Button
                    size="lg"
                    onClick={handlePhotoSubmit}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Icon name="Check" className="h-4 w-4 mr-2" />
                    Подтвердить выбор
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Категории съёмок
            </h3>
            <p className="text-lg text-gray-600">
              Выберите тип фотосъёмки для отбора изображений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon
                    name="GraduationCap"
                    className="h-8 w-8 text-blue-600"
                  />
                </div>
                <CardTitle className="text-xl">Выпускные альбомы</CardTitle>
                <CardDescription>
                  Отбор фотографий согласно выбранному макету альбома
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Фото на обложку</li>
                  <li>• Фото на развороты</li>
                  <li>• Фото на коллажи</li>
                  <li>• Общие фотографии</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Выбрать фотографии
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Camera" className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">
                  Костюмированные съёмки
                </CardTitle>
                <CardDescription>
                  Отбор фотографий с декорациями и в костюмах
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Выбор среди всей съёмки</li>
                  <li>• Указание форматов печати</li>
                  <li>• Костюмированные образы</li>
                  <li>• Тематические декорации</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Выбрать фотографии
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Image" className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Сюжетные фото</CardTitle>
                <CardDescription>Отбор сюжетов для фотосъёмки</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Выбор сюжетов</li>
                  <li>• Творческие композиции</li>
                  <li>• Художественные кадры</li>
                  <li>• Постановочные съёмки</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Выбрать сюжеты
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Camera" className="h-6 w-6" />
                <span className="text-xl font-bold">ФотоРелеликьи</span>
              </div>
              <p className="text-gray-400">
                Система отбора фотографий для детских садов и школ
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Для родителей</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Отбор фотографий</li>
                <li>Онлайн оплата</li>
                <li>Просмотр альбомов</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Для учреждений</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Кабинет администратора</li>
                <li>Управление съёмками</li>
                <li>Работа с фотографами</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@fotorelics.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 ФотоРелеликьи. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
