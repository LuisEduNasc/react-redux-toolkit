import styled from 'styled-components';

export const Container = styled.section`
  margin: 22px auto;
`;

export const Card = styled.article`
  width: 400px;
  min-height: 150px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 15px;
  padding: 14px;
  margin: 14px auto;
`;

export const PostHeader = styled.h2`
  font-size: 36px;
  text-align: center;
  color: #aaaaaa;
  margin-bottom: 6px;
`;

export const PostTitle = styled.h3`
  font-size: 24px;
  color: #6a6a6a;
  margin-bottom: 6px;
`;

export const PostContent = styled.p`
  font-size: 16px;
  color: #1d1d1d;
`;

export const PostFormLabel = styled.label`
  font-size: 18px;
  text-transform: uppercase;
`;

export const PostForm = styled.form`
  display: grid;
`;

export const PostInput = styled.input`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;
  border-radius: 3px;
  padding: 12px;
  margin-bottom: 26px;
`;

export const PostTextArea = styled.textarea`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;
  border-radius: 3px;
  padding: 12px;
  margin-bottom: 26px;
`;

export const PostFromButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  :disabled {
    border: 1px solid #ededed;
    color: #ededed;
  }
`;

export const PostAuthorText = styled.cite`
  font-size: 12px;
  color: #919191;
`;

export const PostAuthorContainer = styled.p`
  font-size: 12px;
  margin-top: 26px;
`;

export const PostSelectAuthor = styled.select`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;
  border-radius: 3px;
  padding: 12px;
  margin-bottom: 26px;
`;

export const PostDate = styled.small`
  font-size: 12px;
  color: #919191;
`;

export const PostReactionContainer = styled.div`
  margin: 0;
  font-size: 12px;
`;

export const PostReactionButton = styled.button`
  margin: 12px 12px 0 0;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
