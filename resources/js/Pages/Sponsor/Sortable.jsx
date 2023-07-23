import { useEffect } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import Sortable from 'sortablejs';
import AdminLayout from '@/Layouts/adminLayout';

const SlideSorting = ({ items }) => {
    const { csrf_token } = usePage().props;
    useEffect(() => {
        const sortableList = document.getElementById('simpleList');

        Sortable.create(sortableList, {
            onEnd: (evt) => {
                const order = Array.from(evt.target.children).map((item) => item.getAttribute('data-id'));

                router
                    .post(route('sponsors.updateOrder'), {
                        _token: csrf_token,
                        order: order,
                    })

            },
        });
    }, [csrf_token]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card border-0">
                        <div className="card-header row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <h3 className="m-0 text-center text-lg-start">Slide sorting</h3>
                            </div>
                            <div className="col-lg-6 col-md-12 text-center text-md-end">
                                <Link href={route('sponsors.index')} className="btn btn-primary" as="button">
                                    Back
                                </Link>
                            </div>
                        </div>
                        <div id="simpleList" className="list-group">
                            {items.map((item) => (
                                <div key={item.id} className="list-group-item" data-id={item.id}>
                                    <img src={`/storage/${item.img}`} alt={item.title} className="img-fluid" width="150" height="auto" />
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SlideSorting.layout = (Page) => <AdminLayout>{Page}</AdminLayout>
export default SlideSorting;


