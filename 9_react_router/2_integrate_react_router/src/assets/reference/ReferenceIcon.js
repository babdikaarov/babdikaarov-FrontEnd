import React from "react";
import styles from "./Reference.module.css";
export default function ReferenceIcon({
  redirectToDefaultMail,
  redirectToURL,
}) {
  return (
    <>
      <div
        onClick={() =>
          redirectToURL("https://github.com/babdikaarov/adoptapet_portfolio")
        }
        className={styles.icons}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38 50"
          className={styles["custom-svg"]}
        >
          <path d="M37.5 11.9083V12.5H25V0H25.5917C26.2133 0 26.8095 0.246973 27.249 0.686426L36.8136 10.251C37.2531 10.6906 37.5 11.2867 37.5 11.9083ZM24.2188 15.625C22.9297 15.625 21.875 14.5703 21.875 13.2812V0H2.34375C1.04932 0 0 1.04932 0 2.34375V47.6562C0 48.9507 1.04932 50 2.34375 50H35.1562C36.4507 50 37.5 48.9507 37.5 47.6562V15.625H24.2188ZM12.0318 39.1118C11.9845 39.1623 11.9276 39.203 11.8645 39.2316C11.8014 39.2601 11.7333 39.276 11.6641 39.2782C11.5949 39.2804 11.5259 39.269 11.4611 39.2446C11.3963 39.2202 11.3369 39.1832 11.2864 39.1358L4.95186 33.1972C4.89925 33.1478 4.85731 33.0883 4.82864 33.0221C4.79998 32.9559 4.78518 32.8846 4.78518 32.8125C4.78518 32.7403 4.79998 32.669 4.82864 32.6028C4.85731 32.5366 4.89925 32.4771 4.95186 32.4277L11.2864 26.4891C11.3369 26.4417 11.3963 26.4047 11.4611 26.3803C11.5259 26.3559 11.5949 26.3445 11.6641 26.3467C11.7333 26.3489 11.8014 26.3648 11.8645 26.3933C11.9276 26.4219 11.9845 26.4626 12.0318 26.5131L13.9438 28.5526C13.9922 28.6042 14.0296 28.6649 14.054 28.7312C14.0784 28.7975 14.0893 28.868 14.0859 28.9386C14.0825 29.0092 14.0649 29.0783 14.0343 29.142C14.0037 29.2057 13.9606 29.2625 13.9075 29.3092L9.92676 32.8125L13.9075 36.3158C13.9606 36.3625 14.0037 36.4193 14.0343 36.483C14.0649 36.5467 14.0825 36.6158 14.0859 36.6864C14.0893 36.757 14.0784 36.8275 14.054 36.8938C14.0296 36.9601 13.9922 37.0208 13.9438 37.0724L12.0318 39.1118ZM17.0411 44.0414L14.3602 43.2631C14.2258 43.2241 14.1125 43.1333 14.0451 43.0108C13.9777 42.8882 13.9617 42.7439 14.0007 42.6096L20.0007 21.943C20.0397 21.8087 20.1305 21.6953 20.253 21.6279C20.3756 21.5605 20.5199 21.5445 20.6542 21.5835L23.3351 22.3618C23.4016 22.3811 23.4636 22.4133 23.5177 22.4566C23.5717 22.4999 23.6167 22.5535 23.6501 22.6141C23.6835 22.6748 23.7046 22.7415 23.7122 22.8103C23.7198 22.8792 23.7138 22.9488 23.6944 23.0153L17.6944 43.6819C17.6752 43.7485 17.643 43.8105 17.5997 43.8646C17.5564 43.9187 17.5029 43.9637 17.4423 43.9971C17.3816 44.0304 17.3149 44.0515 17.2461 44.0592C17.1773 44.0668 17.1076 44.0607 17.0411 44.0414ZM32.7435 33.1972L26.4089 39.1358C26.3584 39.1832 26.299 39.2202 26.2342 39.2446C26.1694 39.269 26.1004 39.2804 26.0312 39.2782C25.962 39.276 25.8939 39.2601 25.8308 39.2316C25.7677 39.203 25.7108 39.1623 25.6635 39.1118L23.7514 37.0723C23.703 37.0207 23.6656 36.96 23.6412 36.8937C23.6168 36.8274 23.606 36.7569 23.6093 36.6863C23.6127 36.6157 23.6303 36.5466 23.6609 36.4829C23.6915 36.4192 23.7347 36.3624 23.7877 36.3157L27.7686 32.8125L23.7878 29.3092C23.7348 29.2625 23.6916 29.2057 23.661 29.142C23.6304 29.0783 23.6128 29.0092 23.6094 28.9386C23.6061 28.868 23.6169 28.7975 23.6413 28.7312C23.6657 28.6649 23.7031 28.6042 23.7515 28.5526L25.6636 26.5131C25.7109 26.4626 25.7678 26.4219 25.8309 26.3933C25.894 26.3648 25.9621 26.3489 26.0313 26.3467C26.1005 26.3445 26.1695 26.3559 26.2343 26.3803C26.2991 26.4047 26.3585 26.4417 26.409 26.4891L32.7436 32.4277C32.7962 32.4771 32.8381 32.5367 32.8667 32.6028C32.8954 32.669 32.9102 32.7404 32.9102 32.8125C32.9102 32.8846 32.8954 32.9559 32.8667 33.0221C32.838 33.0883 32.7961 33.1479 32.7435 33.1972Z" />
          <title>Check out the source code</title>
        </svg>
      </div>
      <div
        onClick={() => redirectToURL("https://github.com/babdikaarov")}
        className={styles.icons}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          className={styles["custom-svg"]}
        >
          <path d="M44.6429 0H5.35714C2.39955 0 0 2.39955 0 5.35714V44.6429C0 47.6004 2.39955 50 5.35714 50H44.6429C47.6004 50 50 47.6004 50 44.6429V5.35714C50 2.39955 47.6004 0 44.6429 0ZM30.9487 42.8237C30.0112 42.9911 29.6652 42.4107 29.6652 41.9308C29.6652 41.3281 29.6875 38.2478 29.6875 35.7589C29.6875 34.0179 29.1071 32.9129 28.4263 32.3326C32.5558 31.875 36.9085 31.3058 36.9085 24.1741C36.9085 22.1429 36.183 21.1272 35 19.8214C35.1897 19.3415 35.8259 17.3661 34.8103 14.7991C33.2589 14.3192 29.7098 16.7969 29.7098 16.7969C28.2366 16.3839 26.6406 16.1719 25.067 16.1719C23.4933 16.1719 21.8973 16.3839 20.4241 16.7969C20.4241 16.7969 16.875 14.3192 15.3237 14.7991C14.308 17.3549 14.933 19.3304 15.1339 19.8214C13.9509 21.1272 13.3929 22.1429 13.3929 24.1741C13.3929 31.2723 17.5558 31.875 21.6853 32.3326C21.1496 32.8125 20.6696 33.6384 20.5022 34.8214C19.442 35.3013 16.7299 36.1272 15.1116 33.2701C14.096 31.5067 12.2656 31.3616 12.2656 31.3616C10.4576 31.3393 12.1429 32.5 12.1429 32.5C13.3482 33.058 14.1964 35.2009 14.1964 35.2009C15.279 38.5156 20.4576 37.3996 20.4576 37.3996C20.4576 38.9509 20.4799 41.4732 20.4799 41.9308C20.4799 42.4107 20.1451 42.9911 19.1964 42.8237C11.8304 40.3571 6.67411 33.3482 6.67411 25.1562C6.67411 14.9107 14.5089 7.1317 24.7545 7.1317C35 7.1317 43.3036 14.9107 43.3036 25.1562C43.3147 33.3482 38.3147 40.3683 30.9487 42.8237ZM20 36.0045C19.7879 36.0491 19.5871 35.9598 19.5647 35.8147C19.5424 35.6473 19.6875 35.5022 19.8996 35.4576C20.1116 35.4353 20.3125 35.5246 20.3348 35.6696C20.3683 35.8147 20.2232 35.9598 20 36.0045ZM18.9397 35.904C18.9397 36.0491 18.7723 36.1719 18.5491 36.1719C18.3036 36.1942 18.1362 36.0714 18.1362 35.904C18.1362 35.7589 18.3036 35.6362 18.5268 35.6362C18.7388 35.6138 18.9397 35.7366 18.9397 35.904ZM17.4107 35.7813C17.3661 35.9263 17.1429 35.9933 16.9531 35.9263C16.7411 35.8817 16.596 35.7143 16.6406 35.5692C16.6853 35.4241 16.9085 35.3571 17.0982 35.4018C17.3214 35.4688 17.4665 35.6362 17.4107 35.7813ZM16.0379 35.1786C15.9375 35.3013 15.7254 35.279 15.558 35.1116C15.3906 34.9665 15.346 34.7545 15.4576 34.654C15.558 34.5312 15.7701 34.5536 15.9375 34.721C16.0826 34.8661 16.1384 35.0893 16.0379 35.1786ZM15.0223 34.1629C14.9219 34.2299 14.7321 34.1629 14.6094 33.9955C14.4866 33.8281 14.4866 33.6384 14.6094 33.5603C14.7321 33.4598 14.9219 33.5379 15.0223 33.7054C15.1451 33.8728 15.1451 34.0737 15.0223 34.1629ZM14.2969 33.0804C14.1964 33.1808 14.029 33.125 13.9062 33.0134C13.7835 32.8683 13.7612 32.7009 13.8616 32.6228C13.9621 32.5223 14.1295 32.5781 14.2522 32.6897C14.375 32.8348 14.3973 33.0022 14.2969 33.0804ZM13.5491 32.2545C13.5045 32.3549 13.3594 32.3772 13.2366 32.2991C13.0915 32.2321 13.0246 32.1094 13.0692 32.0089C13.1138 31.942 13.2366 31.9085 13.3817 31.9643C13.5268 32.0424 13.5938 32.1652 13.5491 32.2545Z" />
          <title>Visit my GitHub</title>
        </svg>
      </div>
      <div onClick={redirectToDefaultMail} className={styles.icons}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 50"
          className={styles["custom-svg"]}
        >
          <path d="M65.4036 16.5104C65.9115 16.1068 66.6667 16.4844 66.6667 17.1224V43.75C66.6667 47.2005 63.8672 50 60.4167 50H6.25C2.79948 50 0 47.2005 0 43.75V17.1354C0 16.4844 0.742187 16.1198 1.26302 16.5234C4.17969 18.7891 8.04688 21.6667 21.3281 31.3151C24.0755 33.3203 28.7109 37.5391 33.3333 37.513C37.9818 37.5521 42.7083 33.2422 45.3516 31.3151C58.6328 21.6667 62.487 18.776 65.4036 16.5104ZM33.3333 33.3333C36.3542 33.3854 40.7031 29.5312 42.8906 27.9427C60.1693 15.4036 61.4844 14.3099 65.4687 11.1849C66.224 10.599 66.6667 9.6875 66.6667 8.72396V6.25C66.6667 2.79948 63.8672 0 60.4167 0H6.25C2.79948 0 0 2.79948 0 6.25V8.72396C0 9.6875 0.442708 10.5859 1.19792 11.1849C5.18229 14.2969 6.4974 15.4036 23.776 27.9427C25.9635 29.5312 30.3125 33.3854 33.3333 33.3333Z" />
          <title>Feel free to send me suggestions!</title>
        </svg>
      </div>
    </>
  );
}