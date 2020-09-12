# mrm tasks

A set of [mrm tasks](https://github.com/sapegin/mrm).

## Tasks

- `commitlint`: installs and configures [commitlint](https://commitlint.js.org/) with
  [@therealklanni/commitlint-config](https://github.com/therealklanni/commitlint-config)
- _eslint coming soon_
- _prettier coming soon_

## Usage

### Recommended

Because `mrm` normally expects the preset ("@therealklanni/mrm") to be globally installed, we want to work
around that, otherwise you would have to keep the globally installed preset updated.

The command is ugly, but this method ensures we always use the _latest_ preset version. Just copy
and paste it 🎉 and replace `<TASK>` with the task name and go!

```
npx -p mrm -p @therealklanni/mrm -c 'mrm --preset @therealklanni/mrm <TASK>'
```

### Manual

If you want to lock in a particular version of this preset, or you just want to type the npx command
manually, install it globally:

```
npm install --global @therealklanni/mrm

npx mrm --preset @therealklanni/mrm <TASK>
```
