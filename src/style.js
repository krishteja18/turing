import styled from '@emotion/styled';
import desktopImage from "../src/desktop_banner.png"

export const Header = styled.div`
 width:100%;
  
  height:540px;
  background-image: url(${desktopImage});
  background-size:cover;
  border:1px solid;
  
  @media(max-width:560px){
    background-position-x: -341px;
  }

`

export const CircleContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:154px;
margin-bottom:50px;
`
export const Company = styled.div`
font: normal normal bold 24px/32px Manrope;
letter-spacing: 0px;
color: #000000;
opacity: 1;`




export const Circle = styled.div`
width: 91px;
margin-bottom:9px;
height: 91px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #B9B9B9;
border-radius: 87px;
opacity: 1;
display:flex;
align-items:center;
justify-content:center;
`

export const SubHeading = styled.div`
text-align: left;
font: normal normal medium 20px/29px Gordita;
font-size:20px;
line-height:29px;
font-family:Gordita;
font-weight:medium;

letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
`

export const Button = styled.div`

width: 220px;
height: 52px;
background: transparent linear-gradient(90deg, #266EFD 0%, #3876F1 100%) 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 17px #3876F194;
border-radius: 5px;
opacity: 1;
display:flex;
align-items:center;
justify-content:center;
margin-top:27px;
text-align: center;
font: normal normal medium 20px/29px Gordita;
font-weight:medium;
font-size:20px;
line-height:29px;
font-family:Gordita;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
`


export const Heading = styled.div`
text-align: left;
/* font: normal normal medium 48px/68px Gordita; */
font-weight:medium;
line-height:68px;
font-family:Gordita;
font-size:48px;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
@media(max-width:600px){
    font-size:38px;
}
`

export const OfferHeading = styled.div`

/* font: normal normal bold 48px/64px Manrope; */
font-weight:bold;
font-size:48px;

font-family:Manrope;
letter-spacing: 0px;
color: #141414;
opacity: 1;
@media(max-width:600px){
    font-size:32px;
}
`
export const CompaniesContainer = styled.div`
margin-top:71px;

`
export const FeaturedHeading = styled.div`
font: normal normal bold 48px/64px Manrope;
letter-spacing: 0px;
color: #141414;
opacity: 1;
margin-bottom:38px;
@media(max-width:600px){
    font-size:32px;
}
`
export const CompaniesFlex = styled.div`

margin:auto;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
@media(max-width:1608px){
    justify-content:flex-start;
}
@media(max-width:559px){
    justify-content:space-between;
}
`
export const ViewOffers = styled.div`
text-align: right;
font: normal normal bold 18px Manrope;
letter-spacing: 0px;
color: #276FFB;
opacity: 1;
`
export const OffersFlex = styled.div`
display:flex;
justify-content:space-between;
@media(max-width:1145px){
    flex-wrap:wrap;
}
@media(max-width:610px){
    flex-direction:column;
    flex-wrap:nowrap;
}
`

export const HeadingsFlex = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:36px;
`
export const Position = styled.div`
text-align: left;
font: normal normal bold 24px/32px Manrope;
letter-spacing: 0px;
color: #276FFB;
opacity: 1;
`
export const DatePosted = styled.div`
text-align: left;
font: normal normal medium 18px/24px Manrope;
letter-spacing: 0px;
color: #141414;
opacity: 0.6;
`
export const Location = styled.span`
font: normal normal medium 20px/27px Manrope;
letter-spacing: 0px;
color: #141414;
margin-right:21px;
opacity: 1;
`
export const JobOffersContainer = styled.div`
padding-top:70px;
`
export const JobOffersContainerInnerContainer = styled.div`
width:85%;
margin:auto;

`
export const LocationB = styled.span`
font: normal normal medium 20px/27px Manrope;
letter-spacing: 0px;
color: #141414;
opacity: 0.6;
`
export const About = styled.div`
font: normal normal medium 20px/27px Manrope;
letter-spacing: 0px;
color: #141414;
opacity: 0.6;
margin-top:28px;
width:77%;
`
export const SmallBlock = styled.div`
background: transparent linear-gradient(90deg, #266EFD 0%, #3876F1 100%) 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 17px #3876F194;
border-radius: 5px;
opacity: 1;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
bottom:0;
right:0;
width: 46px;
height: 43px;
`


export const OfferBlock = styled.div`
width:492px;
position:relative;
border:1px solid transparent;
@media(max-width:1790px){
    width:30%;
}
@media(max-width:1145px){
    width:45%;
    margin-bottom:40px;
}
@media(max-width:610px){
width:100%;
}
`

export const HeaderInnerContainer = styled.div`
width:85%;

height:20px;
margin:auto;
margin-top:205px;
@media(max-width:600px){
    margin-top:94px;
}

`