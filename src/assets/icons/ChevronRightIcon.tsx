import { HTMLAttributes, Ref, forwardRef, memo } from 'react'

type SvgWithColor = {
  className?: string
} & HTMLAttributes<SVGElement>

const ChevronRightIcon = (props: SvgWithColor, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#clip0_306_3646)'}>
      <path
        d={
          'M9.99999 19C9.76634 19.0005 9.5399 18.9191 9.35999 18.77C9.25873 18.6861 9.17503 18.583 9.11368 18.4666C9.05233 18.3503 9.01453 18.223 9.00245 18.092C8.99038 17.961 9.00426 17.8289 9.0433 17.7033C9.08235 17.5777 9.14579 17.4611 9.22999 17.36L13.71 12L9.38999 6.63C9.30692 6.52771 9.24489 6.41002 9.20746 6.28368C9.17003 6.15734 9.15794 6.02485 9.17187 5.89382C9.18581 5.76279 9.22551 5.63581 9.28868 5.52017C9.35186 5.40454 9.43726 5.30252 9.53999 5.22C9.64346 5.12897 9.76462 5.0603 9.89588 5.01831C10.0271 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6925 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6022 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 9.99999 19Z'
        }
      />
    </g>
    <defs>
      <clipPath id={'clip0_306_3646'}>
        <rect height={'24'} width={'24'} />
      </clipPath>
    </defs>
  </svg>
)

const ForwardRef = forwardRef(ChevronRightIcon)

const Memo = memo(ForwardRef)

export default Memo
