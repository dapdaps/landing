import styled from 'styled-components';

const StyledRefresh = styled.div<{ size: number; $mr?: string }>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  line-height: ${({ size }) => size - 4 + 'px'};
  transform-origin: center center;
  display: inline-block;
  text-align: center;
  ${({ $mr }) => $mr && 'margin-right:' + $mr + ';'}

  &.refresh {
    animation: loading 1s linear infinite;
    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default function Refresh({ size = 18, mr, refreshing }: { size?: number; mr?: string; refreshing?: boolean }) {
  return (
    <StyledRefresh size={size} $mr={mr} className={refreshing ? 'refresh' : ''}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18" fill="none">
        <g clip-path="url(#clip0_7724_466)">
          <path
            d="M12.0241 7.0921C11.8201 6.9961 11.7271 6.8671 11.7451 6.7051C11.7631 6.5431 11.8321 6.4141 11.9521 6.3181C11.9881 6.2941 12.1051 6.2011 12.3031 6.0391C12.5011 5.8771 12.7441 5.6821 13.0321 5.4541C12.5281 4.8781 11.9281 4.4251 11.2321 4.0951C10.5361 3.7651 9.78008 3.6001 8.96408 3.6001C8.20808 3.6001 7.50008 3.7411 6.84008 4.0231C6.18008 4.3051 5.60408 4.6921 5.11208 5.1841C4.62008 5.6761 4.23308 6.2521 3.95108 6.9121C3.66908 7.5721 3.52808 8.2801 3.52808 9.0361C3.52808 9.7801 3.66908 10.4821 3.95108 11.1421C4.23308 11.8021 4.62008 12.3781 5.11208 12.8701C5.60408 13.3621 6.18008 13.7491 6.84008 14.0311C7.50008 14.3131 8.20808 14.4541 8.96408 14.4541C9.58808 14.4541 10.1791 14.3551 10.7371 14.1571C11.2951 13.9591 11.8051 13.6801 12.2671 13.3201C12.7291 12.9601 13.1251 12.5371 13.4551 12.0511C13.7851 11.5651 14.0281 11.0341 14.1841 10.4581C14.2681 10.1821 14.4241 9.9541 14.6521 9.7741C14.8801 9.5941 15.1501 9.5041 15.4621 9.5041C15.8341 9.5041 16.1491 9.6361 16.4071 9.9001C16.6651 10.1641 16.7941 10.4761 16.7941 10.8361C16.7941 11.0041 16.7641 11.1661 16.7041 11.3221C16.4521 12.1621 16.0801 12.9361 15.5881 13.6441C15.0961 14.3521 14.5111 14.9611 13.8331 15.4711C13.1551 15.9811 12.4021 16.3801 11.5741 16.6681C10.7461 16.9561 9.87608 17.1001 8.96408 17.1001C7.84808 17.1001 6.79808 16.8901 5.81408 16.4701C4.83008 16.0501 3.97508 15.4741 3.24908 14.7421C2.52308 14.0101 1.94708 13.1551 1.52108 12.1771C1.09508 11.1991 0.88208 10.1521 0.88208 9.0361C0.88208 7.9201 1.09508 6.8701 1.52108 5.8861C1.94708 4.9021 2.52308 4.0471 3.24908 3.3211C3.97508 2.5951 4.83008 2.0191 5.81408 1.5931C6.79808 1.1671 7.84808 0.954102 8.96408 0.954102C10.2001 0.954102 11.3461 1.2091 12.4021 1.7191C13.4581 2.2291 14.3581 2.9221 15.1021 3.7981C15.3781 3.5941 15.6091 3.4171 15.7951 3.2671C15.9811 3.1171 16.0981 3.0241 16.1461 2.9881C16.2181 2.9281 16.2961 2.8831 16.3801 2.8531C16.4641 2.8231 16.5421 2.8231 16.6141 2.8531C16.6861 2.8831 16.7491 2.9461 16.8031 3.0421C16.8571 3.1381 16.8961 3.2821 16.9201 3.4741C16.9321 3.5821 16.9441 3.7651 16.9561 4.0231C16.9681 4.2811 16.9801 4.5811 16.9921 4.9231C17.0041 5.2651 17.0101 5.6191 17.0101 5.9851C17.0101 6.3511 17.0041 6.6961 16.9921 7.0201C16.9801 7.4281 16.8841 7.7221 16.7041 7.9021C16.6081 7.9981 16.4641 8.0521 16.2721 8.0641C16.0801 8.0761 15.8761 8.0581 15.6601 8.0101C15.3361 7.9381 14.9791 7.8601 14.5891 7.7761C14.1991 7.6921 13.8271 7.6051 13.4731 7.5151C13.1191 7.4251 12.8071 7.3411 12.5371 7.2631C12.2671 7.1851 12.0961 7.1281 12.0241 7.0921Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_7724_466">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </StyledRefresh>
  );
}
