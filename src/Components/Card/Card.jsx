import React from "react";
import styles from "./card.module.css";
import useFetch from "../Hooks/useFetch";

const Card = () => {
  const data = useFetch("https://fakestoreapi.com/users");
  console.log(data);

  return (
    <>
      <h2>Welcome To User Profile!!!</h2>
      <section>
        {data &&
          data.map((info, index) => {
            return (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h4>{info.username}</h4>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTitle}>
                    Name: {info.name.firstname} {info.name.lastname}
                  </div>
                  <div className={styles.cardText}>Email: {info.email}</div>
                  <div className={styles.cardText}>
                    Phone Number: {info.phone}
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Card;
