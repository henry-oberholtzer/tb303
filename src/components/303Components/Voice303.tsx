import * as Tone from "tone";

class Voice303 {
	private synth: Tone.MonoSynth;
  private filterMin = 200;
  private filterMax = 2200;
	private envModMin = .01
	private envModMax = 4
	private decayMin = 0.1
	private decayMax = 4
	private accentMinDb = -14
	private accentMaxDb = 0
	tuning: number;
	tempo: number;

	midiToFrequency = (note: number) => 440 * 2 ** ((note - 69) / 12);

	centToFrequency(value: number, f1: number) {
    return f1 * 2 ** (value / 1200) 
  }

  ccToCutoff(value: number) {
    return this.filterMin + value * ((this.filterMax - this.filterMin) / 127)
  }

	ccToEnvMod(value: number) {
		return this.envModMin + value * ((this.envModMax - this.envModMin) / 127)
	}

	ccToResonance(value: number) {
		return 16 * (value/127)
	}

	ccToDecay(value: number) {
		return this.decayMin + value * ((this.decayMax - this.decayMin) / 127)
	}

	ccToAccent(value: number) {
		return this.accentMinDb + value * ((this.accentMaxDb - this.accentMinDb))
	}

	constructor(settings: Settings) {
		this.synth = new Tone.MonoSynth({
			oscillator: {
				type: "pulse",
			},
			envelope: {
				attack: 0.003,
				attackCurve: "linear",
				decay: 3,
				sustain: 0,
				decayCurve: "linear",
				release: 0.003,
			},
			filter: {
				rolloff: -24,
			},
			filterEnvelope: {
				baseFrequency: this.ccToCutoff(settings.cut_off_freq),
				attack: 0.003,
				attackCurve: "linear",
				decay: this.ccToDecay(settings.decay),
				decayCurve: "linear",
				octaves: this.ccToEnvMod(settings.env_mod),
				release: 0.0003,
			},
		}).toDestination()
		this.tempo = settings.tempo;
		this.tuning = settings.tuning;
		if (Tone.getContext().state === "suspended") {
			Tone.getContext().resume()
		}
	}

	setTempo(value: number) {
    this.tempo = value
	}

  setCutoff(value: number) {
		this.synth.filterEnvelope.baseFrequency = this.ccToCutoff(value)
  }

	setTuning(value: number) {
		this.synth.oscillator.detune.setValueAtTime(value, Tone.now());
	}

	setResonance(value: number) {
		this.synth.filter.Q.setValueAtTime(this.ccToResonance(value), Tone.now())
	}

	setEnvMod(value: number) {
		this.synth.filterEnvelope.octaves = this.ccToEnvMod(value)
	}

	setDecay(value: number) {
		this.synth.filterEnvelope.decay = this.ccToDecay(value)
		console.log(this.synth.filterEnvelope.decay)
	}

	setAccent(value: number) {
		this.accent = value
	}

	setVolume(value: number) {
		this.volume = (value/127)
		const t = this.context.currentTime
		this.volumeNode.gain.setValueAtTime((value/127), t)
	}

	adjustWaveform(waveform: 'saw' | 'square') {
		this.synth.oscillator.baseType = waveform === "saw" ? "sawtooth" : "pulse";
	}

	attack(pitch: Pitch, time: number | null = null) {
		const frequency = this.centToFrequency(this.tuning, this.midiToFrequency(pitch.pitch + pitch.octave))
		console.log("Trigger")
		console.log(this.synth.oscillator.baseType)
		this.synth.triggerAttack(frequency)
	}

	slide(pitch: Pitch, time: number | null = null) {
		// const t = time ? time : this.context.currentTime
		// this.osc.frequency.linearRampToValueAtTime(
		// 	this.centToFrequency(
		// 		this.tuning, 
		// 		this.midiToFrequency(pitch.pitch + pitch.octave)), t)
	}

	release(time: number | null = null) {
		this.synth.triggerRelease();
  }

	// pairedPatternlist(pitch: Pitch[], time: Time[]) {
	// 	// Pending
	// }

	// playPattern(pitch: Pitch[], time: Time[]) {
	// 	// Pending
	// }

	// stopPattern() {
	// 	// Pending
	// }

	// sequenceScheduler() {
	// 	// Pending
	// }

	// sequencerScheduleStep() {
	// 	// Pending
	// }

	// sequencerAdvance() {
	// 	// Pending
	// }

	
}


export { Voice303 };
