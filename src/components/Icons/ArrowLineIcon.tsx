export const ArrowLineIcon = ({ size = 18, classname = '' }: { size?: number, classname?: string }) => {

  return (
    <svg className={classname} width={size} height={size * 0.67} viewBox={`0 0 ${size} ${size * 0.67}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="line-arrow"
            d="M1 5.2C0.558172 5.2 0.2 5.55817 0.2 6C0.2 6.44183 0.558172 6.8 1 6.8L1 5.2ZM17.5657 6.56569C17.8781 6.25327 17.8781 5.74674 17.5657 5.43432L12.4745 0.343147C12.1621 0.0307274 11.6556 0.0307274 11.3431 0.343147C11.0307 0.655566 11.0307 1.1621 11.3431 1.47452L15.8686 6L11.3431 10.5255C11.0307 10.8379 11.0307 11.3444 11.3431 11.6569C11.6556 11.9693 12.1621 11.9693 12.4745 11.6569L17.5657 6.56569ZM1 6.8L17 6.8L17 5.2L1 5.2L1 6.8Z"
            fill="currentColor" />
    </svg>
  );
};