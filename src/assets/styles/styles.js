import { COLORS } from '../../utils/colors';

const styles = {
  footerContainer: {
    position: 'relative',
    width: '100%',
    height: '60vh',
    backgroundColor: COLORS.secondaryColor
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '60vh',
    color: COLORS.textPrimaryColor,
    textAlign: 'center'
  },

  boxTextCreadit: {
    display: 'flex',
    flexDirection: 'center',
    justifyContent: 'center'
  },

  cardSmall: {
    position: 'relative',
    height: '200px',
    width: '320px',
    marginRight: '20px',
    marginTop: '50px'
  },
  cardImageSmall: {
    height: '200px',
    width: '320px',
    objectFit: 'cover',
    borderRadius: '10px'
  },
  cardTitleSmall: {
    position: 'absolute',
    width: '105px',
    left: '15px',
    color: COLORS.primryColor,
    bottom: '-5px',
    fontWeight: '500'
  },

  cardListVidio: {
    position: 'relative',
    width: '220px',
    height: '100px',
    borderRadius: '5px',
    marginTop: '20px'
  },
  smallVidio: {
    borderRadius: '5px',
    position: 'relative'
  },
  titleCardVidio: {
    position: 'relative'
  },
  textDate: {
    fontSize: '10px',
    color: '#AAAAAA'
  },
  containerAuth: {
    height: '100vh'
  },
  positionAuth: {
    position: 'fixed',
    height: '100vh',
    width: '100%'
  },

  titleLogo: {
    color: COLORS.primryColor,
    marginTop: '15px',
    fontWeight: '500',
    fontSize: '18px'
  },

  txtLabel: {
    width: '100%',
    display: 'flex',
    marginTop: '20px',
    color: '#696F79',
    fontSize: '16px',
    fontWeight: '500'
  },
  authInput: {
    height: '40px',
    width: '100%'
  },

  // buttonPost: {
  //   height: '30px',

  // },

  bgVidio: {
    backgroundColor: '#efc81a',
    height: '120vh'
  },

  // Home
  bgDecoration: {
    height: '100vh',
    backgroundColor: '#efc81a'
  },

  containerNewRecipe: {
    position: 'relative'
  },

  boxPopular: {
    backgroundColor: '#fff',
    marginTop: '80px'
  },

  boxLatest: {
    backgroundColor: '#fff',
    marginTop: '120px'
  },

  imagePopularContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25px'
  },

  mtMedium: {
    marginTop: '20px'
  },

  boxAboutRecipe: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },

  boxOfCard: {
    marginTop: '30px',
    marginBottom: '100px'
  }
};

export default styles;
