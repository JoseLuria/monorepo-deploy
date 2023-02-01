export const ButtonRed = ({ children, onClick }) => {
  return (
    <button style={{ backgroundColor: 'red', border: 'none' }} onClick={onClick}>
      {children}
    </button>
  )
}
