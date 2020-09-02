export default function Facebook({ width, height, hexColor }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width={width} height={height}>
      <path fill={hexColor} d='M64 10.67C64 5.07 58.94 0 53.33 0H10.67C5.06 0 0 5.06 0 10.67v42.66C0 58.93 5.06 64 10.67 64H32V39.82h-7.82V29.16H32V25c0-7.17 5.38-13.62 12-13.62h8.62v10.66H44c-.94 0-2.04 1.15-2.04 2.87v4.25h10.66v10.66H41.96V64h11.37C58.94 64 64 58.94 64 53.33z'/>
    </svg>
  )
}