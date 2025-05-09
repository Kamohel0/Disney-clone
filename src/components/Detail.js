import styled from 'styled-components';

const Detail = (props) => {
    return (
        <Container>
           <Background>
            <img alt=''
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC4808815AE5721A6AAB372DD14B8CE2E7E9EFF3A27942EF2B6B45EBF4E65CB/scale?width=1440&aspectRatio=1.78&format=jpeg'
            />
           </Background>

           <ImageTitle>
            <img
                alt=''
                src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9562874BAB22B22A698368819B9EBF30FEB0291543552EB2416A5A61A73F63F4/scale?width=1440&aspectRatio=1.78'
                />
           </ImageTitle>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px); 
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px); 
`;

const Background = styled.div`
left: 0px;
opacity: 0.8;
position: fixed;
right: 0px;
top: 0px;
z-index: -1;

img{
    width: 100vw;
    height: 100vw;

    @media (max-width: 768px) {
        width: initial;
    }
}
`;

const ImageTitle =styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin:  0px auto;
    height:  30vw;
    min-height:  170px;
    padding-bottom: 24px;
    width: 100%;

        img{
            max-width: 600px;
            min-width: 200px;
            width: 35vw;
        }
`;

export default Detail;
