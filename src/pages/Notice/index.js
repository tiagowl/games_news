import React from 'react';
import './style.scss';
import Options from '../../components/Options';
import NoticeContent from '../../components/NoticeContent';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

function Notice() {

  const params = useParams();

  React.useEffect(()=>{
    console.log(params);
  }, [params]);

  return (
      <section>
         <Options/>
         <NoticeContent/>
      </section>
  );
}

export default Notice;