interface ErrorMessageProps {
  error: string
}

function Error({error}: ErrorMessageProps) {
  return (
    <p className='text-center'>{error} - Ошибка загрузки данных...</p>
  )
}

export default Error;