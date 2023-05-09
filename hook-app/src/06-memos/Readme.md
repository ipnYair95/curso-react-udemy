# MEMO -> Memoriza un componente para evitar que si cambia le padre se vuelva a renderizar
# useMemo -> Memoriza el cambio de un valor para que cuando cambie este se dispare algun proceso pesado
# useCallback -> Memoriza el cambio de un callback para que cuando cmabie este se dispare algun proceso pesado,
#               ya que por JS puede cambiar el cuerpo de la función y esto provoca que se dispare
#               ademas de poderle enviar parametros
  