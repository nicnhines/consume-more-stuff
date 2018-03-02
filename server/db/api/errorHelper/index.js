let handleError = (err, res) => {
  
  switch(err.code) {
    case '23514':
     res.status(400).json({message: 'Must Choose Condition and/or Category'});
     break;
    case '22P02':
     res.status(422).json({message: 'Price Must Be a Number'});
     break;
    case '23502':
     res.status(422).json({message: 'Missing Field(s)'});
     break;
    default:
      res.json({message: err.message});
  }
  
}

module.exports = handleError;