import React, { useState } from 'react';
import { GlobeAltIcon, MicrophoneIcon, CameraIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// مكون التنبيه البسيط
const Alert = ({ children }) => (
  <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded">
    {children}
  </div>
);

const ServiceCard = ({ title, description, Icon, onClick }) => {
  return (
    <div 
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <Icon className="w-12 h-12 text-blue-600" />
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServiceDetail = ({ title, description, Icon, onClick }) => {
  return (
    <div 
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-6">
        <Icon className="w-16 h-16 text-blue-600" />
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleServiceClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Modern Technology</span>
            </div>
            
            <div className="flex items-center">
              <button onClick={toggleMenu} className="md:hidden">
                {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
              </button>
              
              <div className="hidden md:flex space-x-8">
                <button 
                  onClick={() => setActiveTab('home')}
                  className={`px-3 py-2 ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  الرئيسية
                </button>
                <button 
                  onClick={() => setActiveTab('services')}
                  className={`px-3 py-2 ${activeTab === 'services' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  الخدمات
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => setActiveTab('home')}
                className="block px-3 py-2 w-full text-right"
              >
                الرئيسية
              </button>
              <button 
                onClick={() => setActiveTab('services')}
                className="block px-3 py-2 w-full text-right"
              >
                الخدمات
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <header className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
              <h1 className="text-4xl font-bold mb-4">Modern Technology</h1>
              <p className="text-xl">حلول تكنولوجية متكاملة لخدمات الترجمة والدبلجة وتحرير الفيديو</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <ServiceCard 
                title="الترجمة"
                description="ترجمة الفيديوهات والملفات الصوتية لجميع اللغات"
                Icon={GlobeAltIcon}
                onClick={handleServiceClick}
              />
              <ServiceCard 
                title="الدبلجة"
                description="دبلجة احترافية للفيديوهات والمحتوى الصوتي"
                Icon={MicrophoneIcon}
                onClick={handleServiceClick}
              />
              <ServiceCard 
                title="تبديل الوجوه"
                description="تقنية متطورة لتبديل الوجوه في الفيديوهات"
                Icon={CameraIcon}
                onClick={handleServiceClick}
              />
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">خدماتنا</h2>
            <div className="grid grid-cols-1 gap-6">
              <ServiceDetail 
                title="خدمة الترجمة"
                description="ترجمة احترافية للفيديوهات والملفات الصوتية من وإلى جميع اللغات العالمية. نستخدم أحدث التقنيات لضمان دقة الترجمة وجودتها."
                Icon={GlobeAltIcon}
                onClick={handleServiceClick}
              />
              <ServiceDetail 
                title="خدمة الدبلجة"
                description="دبلجة احترافية للفيديوهات مع مراعاة التزامن الصوتي والتعبير المناسب. نوفر مجموعة متنوعة من الأصوات بلغات مختلفة."
                Icon={MicrophoneIcon}
                onClick={handleServiceClick}
              />
              <ServiceDetail 
                title="خدمة تبديل الوجوه"
                description="تقنية متطورة لتبديل الوجوه في الفيديوهات مع الحفاظ على جودة الصورة والحركة الطبيعية."
                Icon={CameraIcon}
                onClick={handleServiceClick}
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-sm">جميع الحقوق محفوظة © 2024 Modern Technology</p>
          </div>
        </div>
      </footer>

      {/* Alert */}
      {showAlert && (
        <div className="fixed bottom-4 right-4">
          <Alert>
            سيتم إطلاق هذه الخدمة قريباً! يرجى العودة لاحقاً.
          </Alert>
        </div>
      )}
    </div>
  );
};

export default App;