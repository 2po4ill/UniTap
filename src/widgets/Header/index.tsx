import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import UniTapLogo from '../../shared/assets/imgs/icons/UniTap.svg';
import ForBusinessLogo from '../../shared/assets/imgs/icons/ForBusiness.svg';
import AppLink from '../../shared/ui/AppLink/AppLink';
import SampleUserPhoto from '../../shared/assets/imgs/photos/sample user.png';
import DiamondAvatar from '../../shared/assets/imgs/icons/DiamondAvatar.png';

// Sample user data
const sampleUser = {
  name: 'Иванов Иван',
  telegram: '@molak',
  photo: SampleUserPhoto,
  id: 'sample-user-001',
  createdAt: new Date().toISOString()
};

const LANGUAGES = [
  { code: 'Ru', label: 'Ru' },
  { code: 'En', label: 'En' },
  { code: 'Cn', label: 'Cn' },
];

// Sample search results
const sampleSearchResults = [
  {
    id: 1,
    title: 'Мое портфолио',
    path: 'Сервисы → Профиль → Мое портфолио → Мое портфолио',
    icon: 'portfolio',
    hasIcon: true
  },
  {
    id: 2,
    title: 'Мое портфолио',
    path: 'Сервисы → Профиль → Мое портфолио',
    icon: 'portfolio',
    hasIcon: true
  },
  {
    id: 3,
    title: 'Мое портфолио',
    path: 'Сервисы',
    icon: 'portfolio',
    hasIcon: true
  },
  {
    id: 4,
    title: 'Мое портфолио',
    path: 'Сервисы → Профиль → Мое портфолио',
    icon: 'portfolio',
    hasIcon: true
  },
  {
    id: 5,
    title: 'Мое портфолио',
    path: 'Сервисы',
    icon: 'portfolio',
    hasIcon: true
  },
  {
    id: 6,
    title: 'Мое портфолио',
    path: 'Сервисы',
    icon: 'portfolio',
    hasIcon: true
  },
  {
    id: 7,
    title: 'Статус визитки',
    path: '',
    icon: 'arrow',
    hasIcon: false
  },
  {
    id: 8,
    title: 'Электронная почта',
    path: '',
    icon: 'arrow',
    hasIcon: false
  }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [filteredResults, setFilteredResults] = useState(sampleSearchResults);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [lang, setLang] = useState('Ru');

  // Check if user is already connected on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setCurrentUser(user);
      setIsUserConnected(true);
    }
  }, []);

  // Language dropdown: load from localStorage or default to Ru
  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang && LANGUAGES.some(l => l.code === storedLang)) {
      setLang(storedLang);
    } else {
      setLang('Ru');
      localStorage.setItem('lang', 'Ru');
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node)) {
        setIsMobileSearchOpen(false);
      }
    };

    if (isMobileSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMobileSearchOpen]);

  // Focus search input when modal opens
  useEffect(() => {
    if (isMobileSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isMobileSearchOpen]);

  // Filter search results based on input
  useEffect(() => {
    if (searchValue.trim() === '') {
      setFilteredResults(sampleSearchResults);
    } else {
      const filtered = sampleSearchResults.filter(result =>
        result.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        result.path.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  }, [searchValue]);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    // Check if we're on mobile (360px or less)
    if (window.innerWidth <= 639) {
      setIsMobileSearchOpen(!isMobileSearchOpen);
      if (!isMobileSearchOpen) {
        setSearchValue('');
      }
    } else {
      // Desktop behavior
      setIsSearchExpanded(!isSearchExpanded);
      if (!isSearchExpanded) {
        setSearchValue('');
      }
    }
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (!isMobileSearchOpen) {
      setSearchValue('');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search submitted:', searchValue);
  };

  const handleSearchClose = () => {
    setIsSearchExpanded(false);
    setSearchValue('');
  };

  const handleMobileSearchClose = () => {
    setIsMobileSearchOpen(false);
    setSearchValue('');
  };

  const handleConnect = () => {
    try {
      localStorage.setItem('currentUser', JSON.stringify(sampleUser));
      
      const existingUsers = localStorage.getItem('users');
      let users = existingUsers ? JSON.parse(existingUsers) : [];
      
      const userExists = users.find((user: any) => user.id === sampleUser.id);
      if (!userExists) {
        users.push(sampleUser);
        localStorage.setItem('users', JSON.stringify(users));
      }
      
      setCurrentUser(sampleUser);
      setIsUserConnected(true);
      
      console.log('User connected:', sampleUser);
      alert(`Пользователь ${sampleUser.name} успешно подключен!`);
      
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
      alert('Ошибка при подключении пользователя');
    }
  };

  const handleUserClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setIsUserConnected(false);
    setIsDropdownOpen(false);
  };

  const handleLangClick = () => {
    setIsLangDropdownOpen((prev) => !prev);
  };

  const handleLangSelect = (code: string) => {
    setLang(code);
    localStorage.setItem('lang', code);
    setIsLangDropdownOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={UniTapLogo} alt="UniTap logo" style={{ display: 'block', height: 36 }} />
          <img src={ForBusinessLogo} alt="для бизнеса" style={{ display: 'block', height: 13, marginTop: 2 }} />
        </div>

        {/* Navigation + Search Group */}
        <div className={styles.navSearchGroup}>
          {/* Desktop Navigation */}
          <nav className={`${styles.nav} ${isSearchExpanded ? styles.navHidden : ''}`}>
            <AppLink to="/">Главная</AppLink>
            <AppLink to="/products">Продукты</AppLink>
            <AppLink to="/for-business">Для бизнеса</AppLink>
            <AppLink to="/blog">Блог</AppLink>
          </nav>

          {/* Hamburger Menu */}
          <button className={`${styles.hamburger} ${isSearchExpanded ? styles.hamburgerHidden : ''}`} onClick={toggleMobileMenu}>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
          </button>

          {/* Search Component */}
          <div className={`${styles.searchContainer} ${isSearchExpanded ? styles.searchExpanded : ''}`}>
            {!isSearchExpanded ? (
              <button className={styles.searchButton} onClick={toggleSearch}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" />
                  <line x1="14.4142" y1="14" x2="18" y2="17.5858" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            ) : (
              <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Поиск..."
                  value={searchValue}
                  onChange={handleSearchChange}
                  autoFocus
                />
                <button type="button" className={styles.searchClose} onClick={handleSearchClose}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''} ${isSearchExpanded ? styles.mobileNavHidden : ''}`}>
          <AppLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Главная</AppLink>
          <AppLink to="/products" onClick={() => setIsMobileMenuOpen(false)}>Продукты</AppLink>
          <AppLink to="/for-business" onClick={() => setIsMobileMenuOpen(false)}>Для бизнеса</AppLink>
          <AppLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Блог</AppLink>
          {!isUserConnected && (
            <button className={styles.mobileButton} onClick={handleConnect}>Подключить</button>
          )}
        </nav>

        <div className={styles.right}>
          {/* Language Dropdown */}
          <div className={styles.langDropdownContainer} ref={langDropdownRef}>
            <button className={styles.lang} onClick={handleLangClick}>
              {lang}
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {isLangDropdownOpen && (
              <div className={styles.langDropdownMenu}>
                {LANGUAGES.map((l) => (
                  <div
                    key={l.code}
                    className={styles.langDropdownItem + (lang === l.code ? ' ' + styles.langDropdownItemActive : '')}
                    onClick={() => handleLangSelect(l.code)}
                  >
                    {l.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {isUserConnected ? (
            <div className={styles.userDropdownContainer} ref={dropdownRef}>
              <button className={styles.userAvatar} onClick={handleUserClick}>
                <img src={currentUser?.photo} alt={currentUser?.name} />
                <div className={styles.avatarDiamond}>
                  <img src={DiamondAvatar} alt="Diamond" />
                </div>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className={styles.userDropdown}>
                  {/* User Profile Section */}
                  <div className={styles.dropdownUserProfile}>
                    <div className={styles.dropdownUserAvatar}>
                      <img src={currentUser?.photo} alt={currentUser?.name} />
                      <div className={styles.dropdownAvatarDiamond}>
                        <img src={DiamondAvatar} alt="Diamond" />
                      </div>
                    </div>
                    <div className={styles.dropdownUserInfo}>
                      <div className={styles.dropdownUserName}>{currentUser?.name}</div>
                      <div className={styles.dropdownUserHandle}>{currentUser?.telegram}</div>
                    </div>
                    <div className={styles.dropdownArrow}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className={styles.dropdownMenuItems}>
                    <div className={styles.dropdownMenuItem}>
                      <div className={styles.menuItemIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 2C6.13 2 3 5.13 3 9V13L2 16H18L17 13V9C17 5.13 13.87 2 10 2Z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M8 16V18C8 19.1 8.9 20 10 20C11.1 20 12 19.1 12 18V16" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <span>Уведомления</span>
                      <div className={styles.notificationBadge}>999+</div>
                    </div>

                    <div className={styles.dropdownMenuItem}>
                      <div className={styles.menuItemIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M3 18C3 14.13 6.13 11 10 11C13.87 11 17 14.13 17 18" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <span>Профиль</span>
                    </div>

                    <div className={styles.dropdownMenuItem}>
                      <div className={styles.menuItemIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2Z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <span>Внешний вид</span>
                    </div>

                    <div className={styles.dropdownMenuItem}>
                      <div className={styles.menuItemIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 2V6M10 14V18M4.93 4.93L7.76 7.76M12.24 12.24L15.07 15.07M2 10H6M14 10H18M7.76 12.24L4.93 15.07M12.24 7.76L15.07 4.93" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <span>История платежей</span>
                    </div>

                    <div className={styles.dropdownMenuItem}>
                      <div className={styles.menuItemIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10Z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M8 10H12M10 8V12" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <span>Связаться с нами</span>
                    </div>

                    <div className={styles.dropdownMenuItem}>
                      <div className={styles.menuItemIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 7V17C3 18.1 3.9 19 5 19H15C16.1 19 17 18.1 17 17V7C17 5.9 16.1 5 15 5H5C3.9 5 3 5.9 3 7Z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M7 9L10 12L13 9" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <span>Мои заказы</span>
                    </div>

                    <div className={styles.dropdownMenuItem}>
                      <div className={styles.menuItemIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M3 18C3 14.13 6.13 11 10 11C13.87 11 17 14.13 17 18" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M15 5V7M15 7H13M15 7H17" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <span>Добавить аккаунт</span>
                    </div>

                    <div className={`${styles.dropdownMenuItem} ${styles.logoutItem}`} onClick={handleLogout}>
                      <div className={styles.menuItemIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L12 15M12 15L15 12M12 15V9C12 6.24 9.76 4 7 4H6C3.24 4 1 6.24 1 9V11C1 13.76 3.24 16 6 16H7C9.76 16 12 13.76 12 11V9" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <span>Выйти из профиля</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button className={styles.button} onClick={handleConnect}>Подключить</button>
          )}
        </div>
      </header>

      {/* Mobile Search Modal */}
      {isMobileSearchOpen && (
        <div className={styles.mobileSearchOverlay}>
          <div className={styles.mobileSearchModal} ref={mobileSearchRef}>
            {/* Search Header */}
            <div className={styles.mobileSearchHeader}>
              <div className={styles.mobileSearchBar}>
                <div className={styles.mobileSearchIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" />
                    <line x1="14.4142" y1="14" x2="18" y2="17.5858" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  className={styles.mobileSearchInput}
                  placeholder="Поиск"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <button className={styles.mobileVoiceButton}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2C8.9 2 8 2.9 8 4V10C8 11.1 8.9 12 10 12C11.1 12 12 11.1 12 10V4C12 2.9 11.1 2 10 2Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M16 10C16 13.31 13.31 16 10 16C6.69 16 4 13.31 4 10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 16V18" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </button>
              </div>
              <button className={styles.mobileSearchCancel} onClick={handleMobileSearchClose}>
                Отмена
              </button>
            </div>

            {/* Search Results */}
            <div className={styles.mobileSearchResults}>
              {filteredResults.map((result) => (
                <div key={result.id} className={styles.mobileSearchResult}>
                  {result.hasIcon ? (
                    <div className={styles.mobileResultIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#000"/>
                        <path d="M8 10C8 8.9 8.9 8 10 8H14C15.1 8 16 8.9 16 10V14C16 15.1 15.1 16 14 16H10C8.9 16 8 15.1 8 14V10Z" fill="white"/>
                        <path d="M10 12H14M12 10V14" stroke="#000" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  ) : (
                    <div className={styles.mobileResultArrow}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <div className={styles.mobileResultContent}>
                    <div className={styles.mobileResultTitle}>{result.title}</div>
                    {result.path && (
                      <div className={styles.mobileResultPath}>{result.path}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 