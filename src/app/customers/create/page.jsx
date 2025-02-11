"use client"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

import createCustomer from './createCustomer';

export default function CreatePage() {
    const formRef = useRef();
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        await createCustomer(formData);
        if (!formData.get("customer_id")) {
            alert("IDが入力されていません");
            return;} // customer_idが未入力の場合、アラートを出し、かつ、処理を返すことで、次の処理（作成完了のページへ遷移）が進まないようにする
        router.push(`./create/confirm?customer_id=${formData.get("customer_id")}`);
    };
    return (
        <>
            <div className="card bordered bg-white border-blue-200 border-2 max-w-md m-4">
                <div className="m-4 card bordered bg-blue-200 duration-200 hover:border-r-red">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="card-body">
                            <h2 className="card-title">
                                <p><input type="text" name="customer_name" placeholder="桃太郎" className="input input-bordered" /></p>
                            </h2>
                            <p>Customer ID:<input type="text" name="customer_id" placeholder="C030" className="input input-bordered" /></p>
                            <p>Age:<input type="number" name="age" placeholder="30" className="input input-bordered" /></p>
                            <p>Gender:<input type="text" name="gender" placeholder="女" className="input input-bordered" /></p>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="btn btn-primary m-4 text-2xl">
                                作成
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}



