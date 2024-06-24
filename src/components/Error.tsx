interface ErrorMessageProps {
  error: string
}

function Error({error}: ErrorMessageProps) {
  return (
    <p className='text-center text-red'>{error}</p>
  )
}

export default Error;