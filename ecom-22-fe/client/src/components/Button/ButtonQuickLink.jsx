function ButtonQuickLink({ link, img, title, css }) {
    return (
        <a
            href={link}
            className={`button-quicklink h-[42px] max-h-[unset] border border-solid border-gray-300/[10] hover:border-blue-400 rounded 
        text-[1.4rem] leading-[1.7rem] min-h-[36px] mr-[0.8rem] mb-[1rem] py-[0.6rem] px-[1.3rem] flex items-center  ${css} `}
        >
            <img src={img} alt="ButtonQuickLink" className="icon h-[2rem] w-auto mr-[0.5rem]" />
            {title}
        </a>
    );
}

export default ButtonQuickLink;
