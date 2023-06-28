import styles from 'styled-components';

export const Button = styles.button`
  background-color: ${(props) => {
    if (props.children === "POST") {
      return "#0000ff"
    } else if (props.children === "GET" || props.children === "GET ALL" || props.children === 'GET ME') {
      return "#23ca34"
    } else if (props.children === "PUT" || props.children === "PATCH") {
      return "#ff8400"
    } else if (props.children === "DELETE") {
      return "#ff0000"
    }
  }};
  border: none;
  color: white;
  margin-bottom: 1rem;
`
