import { ComponentPropsWithoutRef, CSSProperties, ElementType, forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'

export type TextColor = 'warning' | 'error' | 'info' | 'primary' | 'success' | 'lightDark' | 'dark'

export type TextAlign = 'right' | 'left' | 'center'

export type TextProps<T extends ElementType = 'span'> = {
  /**
   * Пример использования с props "as": Текст будет ссылкой:
   * <Text as={Link} to={ROUTES.profile} variant="subtitle1" className={s.name}>Привет!</Text>
   */
  as?: T
  align?: TextAlign
  textColor?: TextColor
  variant?:
    | 'Large' // 26px;
    | 'H1' // 20px;
    | 'H2' // 18px;
    | 'H3' // 16px;
    | 'regular_text_16' // 16px - BASE FONT;
    | 'bold_text_16'
    | 'regular-text-14'
    | 'medium-text-14'
    | 'bold_text_14'
    | 'small-text-12'
    | 'semi-bold_small_text_12'
    | 'regular-link_14'
    | 'small-link_12'
    | 'error_text_12'
    | 'muted_text'
    | 'inline_code'
  children: ReactNode
  color?: CSSProperties['color']
} & ComponentPropsWithoutRef<T>

const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const {
    as: Comp = 'span',
    className,
    /**
     * Задаёт шрифт + размер + межстрочный интервал текста
     */
    variant = 'regular_text_16',
    textColor = 'primary',
    /**
     * style - для передачи цвета текста пропсом при отрисовки компонента Text
     * Пример использования: <Text variant={'Large'} style={{color: "green"}}>Some text</Text>
     */
    style,
    /**
     * Выравнивание текста
     */
    align,
    children,
    color,
    ...textProps
  } = props

  /**
   "Мерж" классов тайлвинд:
   */
  const textClasses = clsx(
    // Main fonts
    variant === 'Large' && `text-Large-26`,
    variant === 'H1' && `text-H1-20`,
    variant === 'H2' && `text-H2-18`,
    variant === 'H3' && `text-H3-16`,
    variant === 'regular_text_16' && `regular-text-16`,
    variant === 'bold_text_16' && `text-bold-text-16`,
    variant === 'regular-text-14' && `text-regular-text-14`,
    variant === 'medium-text-14' && `text-medium-text-14`,
    variant === 'bold_text_14' && `text-sm-bold-14`,
    variant === 'small-text-12' && `text-small-text-12`,
    variant === 'semi-bold_small_text_12' && `text-semi-bold_small_text_12`,
    variant === 'regular-link_14' && `text-regular_link-14`,
    variant === 'small-link_12' && `text-small-link_12`,

    // Additional fonts
    variant === 'error_text_12' && `text-small-text-12 text-Danger-500`,
    variant === 'muted_text' && `text-md text-muted-foreground`,
    /**
     * Текст с "фоновой" обводкой
     */
    variant === 'inline_code' && `text-xs-small-12 text-Danger-500`,

    textColor === 'primary' && `text-Light-100`,
    textColor === 'warning' && `text-Warning-500`,
    textColor === 'error' && `text-Danger-500`,
    textColor === 'info' && `text-Primary-100`,
    textColor === 'success' && `text-Success-500`,
    textColor === 'success' && `text-Success-500`,
    textColor === 'lightDark' && `text-Dark-100`,
    textColor === 'dark' && `text-Success-900`,

    align === 'center' && `text-center`,
    align === 'left' && `text-left`,
    align === 'right' && `text-right`,
    className
  )

  const styles = {
    ...(color && { color }),
    ...style,
  }

  return (
    <>
      {variant === 'inline_code' ? (
        <code className="relative rounded bg-Light-900/90 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {children}
        </code>
      ) : (
        <Comp ref={ref} className={textClasses} style={styles} {...textProps}>
          {children}
        </Comp>
      )}
    </>
  )
})

Text.displayName = 'Flex'
export { Text }
