/**
 * label: названия для лейблов, например "Confirm password", "Email", "New Password", "Password", и т.д.
 * button: названия для кнопок и ссылок
 * validation: сообщения для валидации, например "Maximum 20 characters for password", "Minimum 6 characters for password", "The passwords must match", и т.д.
 * pages: названия для страниц и их элементов, например "Congratulations!", "Create new password", "Email verification link expired", и т.д.
 * если на странице есть модалка то объект "modal" так же вкладывается внутрь объекта с названием страницы
 */

export type LocaleType = typeof en

export const en = {
  button: {
    answer: 'Answer',
    back: 'Back',
    backToHome: 'Back to home-nav-links',
    backToPayment: 'Back to payment',
    backToSignIn: 'Back to Sign In',
    backToSignUp: 'Back to Sign Up',
    createNewPassword: 'Create new password',
    discard: 'Discard',
    done: 'Done',
    favorites: 'Favorites',
    logOut: 'Log out',
    next: 'Next',
    no: 'No',
    ok: 'OK',
    profileSettings: 'Profile settings',
    publish: 'Publish',
    resendVerificationLink: 'Resend verification link',
    save: 'Save changes',
    saveDraft: 'Save draft',
    selectFromComputer: 'Select from Computer',
    sendLink: 'Send Link',
    sendLinkAgain: 'Send Link Again',
    showLess: 'Show less',
    showMore: 'Show more',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    simple_save: 'Save',
    statistics: 'Statistics',
    yes: 'Yes',
  },
  label: {
    userName: 'Username',
    email: 'Email',
    password: 'Password',
    error: 'Error',
    confirmPassword: 'Confirm password',
  },
  placeholders: {
    email: 'email@inctagram.com',
    firstName: 'Enter your first name',
    lastName: 'Enter your last name',
    password: 'Enter your password',
    passwordConfirm: 'Enter your password again',
    username: 'Enter your username',
  },
  lang: {
    en: 'English',
    ru: 'Russian',
  },
  layout: {
    sidebar: {
      create: 'Create',
      favorites: 'Favorites',
      home: 'Home',
      logout: 'Log Out',
      messenger: 'Messenger',
      profile: 'My profile',
      search: 'Search',
      statistics: 'Statistics',
    },
  },
  pages: {
    signUp: {
      agreement: {
        description: `I agree to the <1>privacy</1> and <2>terms</2>`,
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      metaDescription:
        'Create an account to start using our services and receive exclusive benefits.',
      metaTitle: 'Sign Up',
      modalBtn: 'OK',
      modalText: 'We have sent a link to confirm your email to ',
      question: 'Do you have an account?',
      title: 'Sign Up',
    },
  },
  tabs: {
    devices: 'Devices',
    general: 'General information',
    management: 'Account management',
    payments: 'My payments',
  },
  validation: {
    minLength: (len: number) => `Minimum ${len} characters`,
    required: 'Required field',
    maxLength: (len: number) => `Maximum ${len} characters`,
    emailVerification: 'The email must match the format example@example.com',
    passwordVerification:
      'The password must contain at least 1 capital letter, a special character and a number',
    passwordMismatch: 'The passwords must match',
    userNameVerification:
      'Username can contain only letters "a-z" (uppercase and lowercase), numbers, and the characters "_" and "-"',
  },
}
