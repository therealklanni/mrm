# mrm tasks

A set of [mrm tasks](https://github.com/sapegin/mrm).

## Tasks

- `commitlint`: install and configure
  [commitlint](https://commitlint.js.org/)
- _eslint coming soon_
- _prettier coming soon_

## Usage

### Recommended

Because `mrm` expects the preset ("@therealklanni/mrm") to be
globally installed, we want to work around that, otherwise you would
have to keep the globally installed preset updated.

The command is ugly, but this method ensures we always use the _latest_
preset version.

```
npx -p mrm -p @therealklanni/mrm -c 'mrm <TASK> --preset @therealklanni/mrm'
```

### Manual

If you want to lock in a particular version of this preset, or you just
want to type the npx command more easily.

```
npm install --global @therealklanni/mrm

npx mrm <TASK> --preset @therealklanni/mrm
```
