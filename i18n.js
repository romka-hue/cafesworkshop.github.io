document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.menu': 'Menu',
            'nav.contact': 'Contact',

            'home.title': 'Welcome to sherekilebi',
            'home.subtitle': 'Taste of Georgian Tradition',
            'home.viewMenu': 'View Menu',

            'about.title': 'About Us',
            'about.content': 'At sherekilebi, we bring the authentic flavors of Georgia to your table. Our dishes are crafted from traditional recipes and the finest local ingredients to give you a true taste of home.',

            'index.menu.title': 'Our Signature Dishes',
            'index.menu.items.pizza.name': 'Margherita Pizza',
            'index.menu.items.pizza.desc': 'Fresh mozzarella, basil, and tomato sauce on wood-fired crust',
            'index.menu.items.pizza.price': '$16',

            'contact.title': 'Visit Us',
            'contact.heading': 'Contact Information',
            'contact.addressLabel': 'Address:',
            'contact.address': 'Batumi, Georgia',
            'contact.phoneLabel': 'Phone:',
            'contact.phone': '+995 511 70 04 00',
            'contact.emailLabel': 'Email:',
            'contact.email': 'info@sherekilebi.com',
            'contact.hoursLabel': 'Hours:',
            'contact.hours': 'Mon-Sun 10:00 AM - 11:00 PM',

            'menu.hero.title': 'Our Menu',
            'menu.hero.subtitle': 'Authentic Georgian Cuisine',

            'menu.categories.all': 'All',
            'menu.categories.appetizers': 'Appetizers',
            'menu.categories.main-courses': 'Main Courses',
            'menu.categories.soups': 'Soups',
            'menu.categories.desserts': 'Desserts',
            'menu.categories.beverages': 'Beverages',

            'menu.items.pkhali.name': 'Pkhali',
            'menu.items.pkhali.desc': 'Traditional Georgian vegetable pâté with walnuts and spices',
            'menu.items.pkhali.price': '$8',

            'menu.items.badrijani.name': 'Badrijani Nigvzit',
            'menu.items.badrijani.desc': 'Fried eggplant rolls with walnut paste and pomegranate',
            'menu.items.badrijani.price': '$10',

            'menu.items.khachapuri.name': 'Khachapuri',
            'menu.items.khachapuri.desc': 'Traditional cheese-filled bread with butter and egg',
            'menu.items.khachapuri.price': '$14',

            'menu.items.khinkali.name': 'Khinkali',
            'menu.items.khinkali.desc': 'Georgian dumplings filled with spiced meat and broth',
            'menu.items.khinkali.price': '$16',

            'menu.items.chicken.name': 'Chicken Wings',
            'menu.items.chicken.desc': 'Roasted chicken wings with love and Georgian spices',
            'menu.items.chicken.price': '$10',

            'menu.items.georgian-soup.name': 'Georgian Soup',
            'menu.items.georgian-soup.desc': 'Traditional Georgian soup made with authentic ingredients',
            'menu.items.georgian-soup.price': '$18',

            'menu.items.beef-stew.name': 'Beef Stew Soup',
            'menu.items.beef-stew.desc': 'Slow-cooked soup with rich, authentic flavor',
            'menu.items.beef-stew.price': '$12',

            'menu.items.churchkhela.name': 'Churchkhela',
            'menu.items.churchkhela.desc': 'Traditional Georgian candy made with grape must and walnuts',
            'menu.items.churchkhela.price': '$6',

            'menu.items.pelamushi.name': 'Pelamushi',
            'menu.items.pelamushi.desc': 'Georgian grape pudding with a sweet and tangy flavor',
            'menu.items.pelamushi.price': '$5',

            'menu.items.wine.name': 'Georgian Wine',
            'menu.items.wine.desc': 'Selection of traditional Georgian wines',
            'menu.items.wine.price': '$8',

            'menu.items.soft-drinks.name': 'Soft Drinks',
            'menu.items.soft-drinks.desc': 'Coca-Cola, Sprite, Fanta, Water',
            'menu.items.soft-drinks.price': '$3',

            'footer.copyright': '© 2026 sherekilebi. All rights reserved.',

            'menu.noResults': 'No items found'
        },
        ka: {
            'nav.home': 'მთავარი',
            'nav.about': 'ჩვენ შესახებ',
            'nav.menu': 'მენიუ',
            'nav.contact': 'კონტაქტი',

            'home.title': 'მოგესალმებით შერეკილებში',
            'home.subtitle': 'ქართული ტრადიციის გემო',
            'home.viewMenu': 'ნახე მენიუ',

            'about.title': 'ჩვენ შესახებ',
            'about.content': 'ჩვენ გთავაზობთ ავთენტურ ქართულ სამზარეულოს და სტუმართმოყვარეობას. ჩვენი რეცეპტები დაფუძნებულია ტრადიციებზე და საუკეთესო ინგრედიენტებზე.',

            'contact.title': 'მოგვენახონ',
            'contact.heading': 'კონტაქტის ინფორმაცია',
            'contact.addressLabel': 'მისამართი:',
            'contact.address': 'ბათუმი, საქართველო',
            'contact.phoneLabel': 'ტელეფონი:',
            'contact.phone': '+995 511 70 04 00',
            'contact.emailLabel': 'ელ. ფოსტა:',
            'contact.email': 'info@sherekilebi.com',
            'contact.hoursLabel': 'საათი:',
            'contact.hours': 'ორშ-კვ 10:00 - 23:00',

            'menu.hero.title': 'ჩვენი მენიუ',
            'menu.hero.subtitle': 'ავტენტიკური ქართული სამზარეულო',

            'menu.categories.all': 'ყველა',
            'menu.categories.appetizers': 'სტარტერები',
            'menu.categories.main-courses': 'ძირითადო კერძები',
            'menu.categories.soups': 'სუპები',
            'menu.categories.desserts': 'ტკბილეული',
            'menu.categories.beverages': 'სასმელები',

            'menu.items.pkhali.name': 'ფხალი',
            'menu.items.pkhali.desc': 'ტრადიციული ქართული ბოსტნეულის პამახი ნიგვზით და სანელებლებით',
            'menu.items.pkhali.price': '$8',

            'menu.items.badrijani.name': 'ბადრიჯანი ნიგვზით',
            'menu.items.badrijani.desc': ' შემწვარი ბადრიჯანის რულეტები ნიგვზით და რცხილიტით',
            'menu.items.badrijani.price': '$10',

            'menu.items.khachapuri.name': 'ხაჭაპური',
            'menu.items.khachapuri.desc': 'ტრადიციული ხაჭაპური კარაქითა და კვერცხით',
            'menu.items.khachapuri.price': '$14',

            'menu.items.khinkali.name': 'ხინკალი',
            'menu.items.khinkali.desc': 'ქართული ღომები მარილ-პილპილით და ხორცით',
            'menu.items.khinkali.price': '$16',

            'menu.items.chicken.name': 'ქათმის ფრთები',
            'menu.items.chicken.desc': 'შემწვარი ქათმის ფრთები ქართული სანელებლებით',
            'menu.items.chicken.price': '$10',

            'menu.items.georgian-soup.name': 'ქართული სუპი',
            'menu.items.georgian-soup.desc': 'ტრადიციული ქართული სუპი ავთენტური ინგრედიენტებით',
            'menu.items.georgian-soup.price': '$18',

            'menu.items.beef-stew.name': 'ხორცოვანი სუპი',
            'menu.items.beef-stew.desc': 'მეგობრულად მოხუცებული ხორციანი სუპი',
            'menu.items.beef-stew.price': '$12',

            'menu.items.churchkhela.name': 'ჭურჩხელა',
            'menu.items.churchkhela.desc': 'ტრადიციული ქართული ტკბილი უნდა',
            'menu.items.churchkhela.price': '$6',

            'menu.items.pelamushi.name': 'პელამუში',
            'menu.items.pelamushi.desc': 'ღვინის ფირფიტის ჟელე ტკბილი და ნამდვილ გემოზე',
            'menu.items.pelamushi.price': '$5',

            'menu.items.wine.name': 'ქართული ღვინო',
            'menu.items.wine.desc': 'ტრადიციული ქართული ღვინოების არჩევანი',
            'menu.items.wine.price': '$8',

            'menu.items.soft-drinks.name': 'გაზიანი სასმელები',
            'menu.items.soft-drinks.desc': 'Coca-Cola, Sprite, Fanta, წყალი',
            'menu.items.soft-drinks.price': '$3',

            'footer.copyright': '© 2026 შერეკილები. ყველა უფლება დაცულია.',

            'menu.noResults': 'არცერთი ნივთი არ მოიძებნა',

            'index.menu.title': 'ჩვენი საუკეთესო კერძები',
            'index.menu.items.pizza.name': 'მარგარიტა პიცა',
            'index.menu.items.pizza.desc': 'მარგარიტა: ტკბილი პომოდორი, მოზარელა და ბაზილიკა',
            'index.menu.items.pizza.price': '$16'
        }
    };

    const DEFAULT_LANG = 'en';

    function applyLanguage(lang) {
        const dictionary = translations[lang] || translations[DEFAULT_LANG];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dictionary[key]) {
                el.textContent = dictionary[key];
            }
        });

        // alt attributes
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (dictionary[key]) el.alt = dictionary[key];
        });

        // update language toggle tokens
        document.querySelectorAll('.lang-toggle').forEach(btn => {
            btn.textContent = (lang === 'en') ? 'EN' : 'KA';
        });

        // set document language for accessibility
        try { document.documentElement.lang = lang; } catch(e) { /* ignore */ }
    }

    // Load preferred language
    const saved = localStorage.getItem('site-lang') || DEFAULT_LANG;
    applyLanguage(saved);

    // toggle handler
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const current = localStorage.getItem('site-lang') || DEFAULT_LANG;
            const next = current === 'en' ? 'ka' : 'en';
            localStorage.setItem('site-lang', next);
            applyLanguage(next);
        });
    });

    // expose for other scripts (so dynamically added elements can be localized)
    window.applyLanguage = applyLanguage;

});