import React from 'react';

const FAQ = () => {
    return (
        <div className="space-y-2 md:w-2/3">
            <h2 className='py-4 text-center font-family-anton font-bold text-3xl mt-4'>Frequently Asked Question...</h2>
            {/* FAQ 1 */}
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title font-semibold">
                    How do I create a cover page?
                </div>
                <div className="collapse-content text-sm">
                    Simply select a template, fill in your details, and download your cover page in PDF format.
                </div>
            </div>

            {/* FAQ 2 */}
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">
                    Are the templates free to use?
                </div>
                <div className="collapse-content text-sm">
                    Yes, all templates are completely free to use for personal and academic purposes.
                </div>
            </div>

            {/* FAQ 3 */}
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">
                    Can I customize the templates?
                </div>
                <div className="collapse-content text-sm">
                    Unfortunately No! But you can edit all text fields suit your needs.
                </div>
            </div>

            {/* FAQ 4 */}
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">
                    Do I need to create an account?
                </div>
                <div className="collapse-content text-sm">
                    No, you can use CoverForge without an account.
                </div>
            </div>

            {/* FAQ 5 */}
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">
                    What file formats are supported for download?
                </div>
                <div className="collapse-content text-sm">
                    Currently, we support PDF downloads, which are perfect for printing and sharing.
                </div>
            </div>
        </div>
    );
};

export default FAQ;