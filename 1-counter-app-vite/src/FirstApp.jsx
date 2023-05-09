import PropTypes from 'prop-types';

const newMessage = {
  message: 'msg',
  title: 'title'
}

const sum = (a, b) => a + b;

export const FirstApp = ({
  title,
  valor
}) => {
  return (
    <>
      <h1 data-testid="test-title" > {title} </h1>
      <h2> {valor}</h2>
      <h3> Suma: {sum(2, 4)} </h3>
      {/* <code> { JSON.stringify(newMessage) } </code> */}
      <p> Soy un subtitulo </p>
    </>
  )
}

FirstApp.defaultProps = {
  //title: 'No hay titulo',
  valor: 0
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired
};

