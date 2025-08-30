import React from 'react';
import Navbar from './Navbar';
import Footer from '../components/Footer';

const About = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',  
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: '#EDEDED',
      padding: '2rem',
    },
    imageContainer: {
      flex: '1',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      maxWidth: '80%', 
      height: 'auto',
      borderRadius: '8px',
    },
    textContainer: {
      flex: '2',
      padding: '1rem',
    },
    title: {
      fontSize: '3rem',
      marginBottom: '0.5rem',
      textAlign: 'center',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
      color: '#FFCC00', 
      fontWeight: 'bold', 
      letterSpacing: '1px', 
    },
    paragraph: {
      maxWidth: '800px',
      lineHeight: 1.8, 
      margin: '0.5rem auto 2rem auto',
      textAlign: 'justify',
      color: '#B0BEC5',
      fontSize: '1.1rem', 
      padding: '0.5rem',
      backgroundColor: 'rgba(255, 204, 0, 0.1)', 
      borderRadius: '5px', 
    },
  };
  const imageUrl = 'https://th.bing.com/th/id/R.ab9b249afd7ec3b3323551198029d5ad?rik=HnjTO%2fLcRj10PA&riu=http%3a%2f%2fwww.strikecheck.com%2fwp-content%2fuploads%2f2018%2f04%2fStrikeCheck-PC-History-Timeline.png&ehk=z8Usp2OiryCnFp4MP5FIOPhxWxw4NzUhOr3vVbfe8Bw%3d&risl=&pid=ImgRaw&r=0';
  return (
    <> 
      <Navbar />
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src={imageUrl} alt="Computer Science History" style={styles.image} />
        </div>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>History Of Computer Science</h1>
          <p style={styles.paragraph}>
            In 1702, Gottfried Wilhelm Leibniz developed logic in a formal, mathematical sense with his writings on the binary numeral system. Leibniz simplified the binary system and articulated logical properties such as conjunction, disjunction, negation, identity, inclusion, and the empty set. He anticipated Lagrangian interpolation and algorithmic information theory. His calculus ratiocinator anticipated aspects of the universal Turing machine. In 1961, Norbert Wiener suggested that Leibniz should be considered the patron saint of cybernetics. Wiener is quoted with "Indeed, the general idea of a computing machine is nothing but a mechanization of Leibniz's Calculus Ratiocinator." But it took more than a century before George Boole published his Boolean algebra in 1854 with a complete system that allowed computational processes to be mathematically modeled.
            
            By this time, the first mechanical devices driven by a binary pattern had been invented. The Industrial Revolution had driven forward the mechanization of many tasks, and this included weaving. Punched cards controlled Joseph Marie Jacquard's loom in 1801, where a hole punched in the card indicated a binary one and an unpunched spot indicated a binary zero. Jacquard's loom was far from being a computer, but it did illustrate that machines could be driven by binary systems and stored binary information.
            
            Charles Babbage and Ada Lovelace  
            Main articles: Charles Babbage and Ada Lovelace  
            Charles Babbage is often regarded as one of the first pioneers of computing. Beginning in the 1810s, Babbage had a vision of mechanically computing numbers and tables. Putting this into reality, Babbage designed a calculator to compute numbers up to 8 decimal points long. Continuing with the success of this idea, Babbage worked to develop a machine that could compute numbers with up to 20 decimal places. By the 1830s, Babbage had devised a plan to develop a machine that could use punched cards to perform arithmetical operations. The machine would store numbers in memory units, and there would be a form of sequential control. This means that one operation would be carried out before another in such a way that the machine would produce an answer and not fail. This machine was to be known as the "Analytical Engine", which was the first true representation of what is the modern computer.
          </p>
        </div>
      </div>
      <Footer />  
    </>
  );
};

export default About;
