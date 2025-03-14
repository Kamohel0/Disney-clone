import styled from 'styled-components';

const Detail = (props) => {
    return (
        <Container>
           <Background>
            <img alt=''
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC4808815AE5721A6AAB372DD14B8CE2E7E9EFF3A27942EF2B6B45EBF4E65CB/scale?width=1440&aspectRatio=1.78&format=jpeg'
            />
           </Background>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px); /* Space added */
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px); /* Fixed padding syntax */
`;

const Background = styled.div`
`;

export default Detail;
