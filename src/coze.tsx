import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 处理订阅逻辑
    alert(`感谢您的订阅，${email}！`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* 导航栏 */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-bold text-gray-900">产品名称</span>
          </div>
          
          {/* 桌面导航 */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">功能</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">定价</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">评价</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">联系</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors">
              登录
            </button>
            <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              开始使用
            </button>
            
            {/* 移动菜单按钮 */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* 移动菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fadeIn">
            <nav className="flex flex-col px-4 py-2 space-y-3">
              <a href="#features" className="py-2 text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>功能</a>
              <a href="#pricing" className="py-2 text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>定价</a>
              <a href="#testimonials" className="py-2 text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>评价</a>
              <a href="#contact" className="py-2 text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>联系</a>
            </nav>
          </div>
        )}
      </header>

      {/* 主要内容区域 */}
      <main>
        {/* Hero 部分 */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                  让您的业务<span className="text-indigo-600">更上一层楼</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  我们的创新解决方案帮助全球企业提高效率，节省时间，并实现增长目标。简单、强大且完全可定制。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
                    立即开始
                  </button>
                  <button className="px-8 py-3 rounded-md border border-gray-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
                    观看视频
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-64 h-64 bg-indigo-200 rounded-full opacity-30 blur-2xl"></div>
                  <img 
                    src="https://picsum.photos/800/600 " 
                    alt="产品展示" 
                    className="rounded-xl shadow-2xl w-full object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* 波浪形底部 */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#f8fafc" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,154.7C672,139,768,149,864,144C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* 功能部分 */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">强大的功能</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                我们提供一系列工具和特性来帮助您优化工作流程并提升效率
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={
                  <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="实时协作"
                description="与团队成员实时协作，无缝同步所有更改，确保每个人都在同一页面上。"
              />
              
              <FeatureCard
                icon={
                  <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                }
                title="数据分析"
                description="内置的分析工具帮助您深入了解业务表现，做出数据驱动的决策。"
              />
              
              <FeatureCard
                icon={
                  <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                }
                title="安全可靠"
                description="我们采用银行级加密和多重身份验证，确保您的数据始终安全无虞。"
              />
            </div>
          </div>
        </section>

        {/* CTA 部分 */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              现在就开始改变您的工作方式
            </h2>
            <p className="text-indigo-100 max-w-2xl mx-auto mb-10 text-lg">
              加入数千家已经通过我们的平台提升效率的企业
            </p>
            <button className="px-8 py-4 rounded-md bg-white text-indigo-600 font-medium hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
              免费试用 14 天
            </button>
          </div>
        </section>

        {/* 定价部分 */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">灵活的定价方案</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                根据您的需求选择最适合的计划，所有计划都包含基本功能
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard 
                name="基础版"
                price="0"
                features={[
                  "最多 5 个用户",
                  "1GB 存储空间",
                  "基础支持服务",
                  "标准模板库"
                ]}
                ctaText="立即注册"
                isPopular={false}
              />
              
              <PricingCard 
                name="专业版"
                price="29"
                features={[
                  "最多 20 个用户",
                  "10GB 存储空间",
                  "优先支持服务",
                  "高级模板库",
                  "自定义域名"
                ]}
                ctaText="升级到专业版"
                isPopular={true}
              />
              
              <PricingCard 
                name="企业版"
                price="99"
                features={[
                  "无限用户",
                  "1TB 存储空间",
                  "专属客户经理",
                  "定制开发服务",
                  "SLA 保障"
                ]}
                ctaText="联系我们"
                isPopular={false}
              />
            </div>
          </div>
        </section>

        {/* 客户评价 */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">客户评价</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                来自我们尊贵客户的反馈
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TestimonialCard
                content="自从使用了这个产品，我们的团队效率提升了至少 50%。界面直观易用，功能强大。"
                author="李明"
                role="市场总监 @ 创新科技"
                avatar="https://picsum.photos/200/300?random=1 "
              />
              
              <TestimonialCard
                content="这是我们在过去几年中投资的最佳 SaaS 工具。客户服务非常出色，总是能及时响应。"
                author="王芳"
                role="首席技术官 @ 星辰集团"
                avatar="https://picsum.photos/200/300?random=2 "
              />
              
              <TestimonialCard
                content="该平台的分析功能帮助我们做出了更好的商业决策。强烈推荐给任何规模的企业。"
                author="张伟"
                role="运营经理 @ 云启科技"
                avatar="https://picsum.photos/200/300?random=3 "
              />
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">保持联系</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  如有任何问题或需要帮助，请随时与我们联系
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="您的姓名"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="您的邮箱"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">主题</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="咨询主题"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">消息</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="请写下您的问题或建议..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    发送消息
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-xl font-bold">产品名称</span>
              </div>
              <p className="text-gray-400 mb-4">
                提供创新的解决方案，帮助企业和个人实现卓越成就。
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.406 0 22.675 0z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.819-.26.819-.577 0-.284-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.797 24 18.298 24 12.5A9.5 9.5 0 0012 0z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">产品</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">功能</a></li>
                <li><a href="#" className="hover:text-white transition-colors">定价</a></li>
                <li><a href="#" className="hover:text-white transition-colors">文档</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">公司</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">博客</a></li>
                <li><a href="#" className="hover:text-white transition-colors">职业发展</a></li>
                <li><a href="#" className="hover:text-white transition-colors">合作伙伴</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">资源</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系支持</a></li>
                <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
                <li><a href="#" className="hover:text-white transition-colors">条款与条件</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2023 产品名称. 保留所有权利。</p>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

// FeatureCard 组件
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// PricingCard 组件
function PricingCard({ name, price, features, ctaText, isPopular }) {
  return (
    <div className={`rounded-xl overflow-hidden transition-transform duration-300 ${isPopular ? 'transform scale-105' : ''}`}>
      <div className={`px-6 py-8 text-center ${isPopular ? 'bg-indigo-600 text-white' : 'bg-white'}`}>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-baseline justify-center mb-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="ml-1 text-sm">/月</span>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className={`${isPopular ? 'text-indigo-100' : 'text-gray-600'}`}>
              {feature}
            </li>
          ))}
        </ul>
        <button className={`w-full py-2 rounded-md font-medium transition-colors ${
          isPopular 
            ? 'bg-white text-indigo-600 hover:bg-indigo-50' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}>
          {ctaText}
        </button>
      </div>
    </div>
  );
}

// TestimonialCard 组件
function TestimonialCard({ content, author, role, avatar }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{content}"</p>
    </div>
  );
}