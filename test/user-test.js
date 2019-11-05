import request from 'supertest'
import test from 'ava'
import sinon from 'sinon'

import app from '../src/app'

const version = '/v1'

const sandbox = sinon.createSandbox();

const userUtils = {
  save() {}
}

test.before(t=>{
  //  Esto se ejecuta antes que todos los test
  sandbox.stub(userUtils,'save')
});

test.after(t =>{
  //  Esto se ejecuta despues de todos los test
  sandbox.restore();
});

  //  Metodo de testeo (nombre,callback)
test('should pass', (t) => {
  t.pass()
})

/*
    1)  Guardar datos del usaurio:
        Dado un usuario con su nombre y un email valido
        cuando el usaurio envie su información al sistema
        luego el sistema debe guardar su información
 */
// tes.cb = opcoón para correr test usando callbacks
test.cb('save valid user data', (t) => {
  // Dado un usuario con su nombre y un email valido
  const user = { name: 'john', email: 'jonh,doe@email.com' }

  // cuando el usaurio envie su información al sistema
  request(app)
    .post(`${version}/users`)
    .send(user)
    .expect('Content-Type', /json/)
    .expect(201)
    .end((err, res) => {
      t.falsy(err, 'should no error') // https://github.com/avajs/ava/blob/HEAD/docs/03-assertions.md
      t.end();

      sandbox.assert.calledOnce(userUtils.save);
    })
})
