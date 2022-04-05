import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CustomDialog } from "react-st-modal";
import { toast } from "react-toastify";
import AddItem from "../../../components/Items/AddItem";
import DataServices from "../../../firebase/services";

const AddAcollocation = () => {
    const { config } = useSelector((state) => state);
    const handleAdd = async () => {
        const result = await CustomDialog(<AddItem config={config} />, {
            title: "Add a phrasal verb",
        });
        if (result) {
            const data = {
                en: {
                    Name: result.NameEn,
                    Ex: result.ExEn || "Not available right now.",
                    Desc: result.DescEn || "Not available right now.",
                },
                ar: {
                    Name: result.NameAr,
                    Ex: result.ExAr || "غير متوفر.",
                    Desc: result.DescAr || "غير متوفر.",
                },
            };
            try {
                await DataServices.addItem("PhrasalVerb", data);
                toast.success(`PhrasalVerb  ( ${data.en.Name} ) is added`);
            } catch (error) {
                console.log(error);
                toast.error("Sorry there is an error");
            }
        }
    };

    return (
        <>
            <span>Add a collection</span>
            <Button onClick={() => handleAdd()} className="px-4 py-2">
                <svg
                    width="22"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="pen"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-pen fa-w-16 fa-2x"
                >
                    <path
                        fill="currentColor"
                        d="M493.25 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.26 18.74L12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.78-.05 2.69-.15l114.14-12.61 352.48-352.48c24.99-24.99 24.99-65.51-.01-90.5zM126.09 468.68l-93.03 10.31 10.36-93.17 263.89-263.89 82.77 82.77-263.99 263.98zm344.54-344.54l-57.93 57.93-82.77-82.77 57.93-57.93c6.04-6.04 14.08-9.37 22.63-9.37 8.55 0 16.58 3.33 22.63 9.37l37.51 37.51c12.47 12.48 12.47 32.78 0 45.26z"
                        className=""
                    ></path>
                </svg>
            </Button>
        </>
    );
};

export default AddAcollocation;
