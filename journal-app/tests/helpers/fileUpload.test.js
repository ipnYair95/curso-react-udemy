import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: 'daijgyraz',
    api_key: '473278882987894',
    api_secret: 'Bu8XTTM5msjE5VB9nN8wbFiztKs',
    secure: true
});

describe('File upload', () => {

    test('debe de subir el archivo', async () => {

        const imgUrl = 'https://res.cloudinary.com/daijgyraz/image/upload/v1686936425/static/dfd_aaqqfj.jpg';

        const resp = await fetch(imgUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        const cloudResp = await cloudinary.api.delete_resources([`journal-app/${imageId}`], {
            resource_type: 'image'
        });

        console.log(cloudResp);

    });

    test('debe de retornar null', async () => {

        const file = undefined;

        const url = await fileUpload(file);

        expect(url).toBe(null);


    });

});